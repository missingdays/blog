## Вступление
JavaScript - гибкий динамический язык, позволяющий делать множество вещей, недоступных в других языках программирования. К сожалению (именно к сожалению, а не к счастью), в нем есть много способов сделать одну и ту же вещь разными способами, которые внешне мало чем отличаются. Как говорит нам дзен Python - "Должен быть один -- и желательно только один -- способ сделать это". В этом цикле статей я постараюсь в деталях рассмотреть различные способы создания ООП, доступа к полям объекта, создание константных полей, работы с функциями и многое другое.


## В этой статье
Мы начнем с довольно изъезженной темы - работы с полями объекта. Нам хочется не просто писать/читать значения, но и делать какие-то еще действия помимо. Например, проверять, что аргументы удовлетворяют какому-то условию, фильтровать данные перед их чтением и т.д. Про 
это написано [много](http://habrahabr.ru/post/108295/) [статей](https://learn.javascript.ru/descriptors-getters-setters), однако почему-то никто не упоминает, какой способ лучше использоваться и почему.
Весь код вы можете найти в [этом репозитории](https://github.com/missingdays/blog/tree/master/benchmarks/get_set).


## Начинаем
Для запуска бенчмарков я предпочитаю использовать библиотеку [Benchmark](http://benchmarkjs.com/). 
```js
npm i --save benchmark
```
Рассмотрим три основных метода работы с полями:

Java-like геттеры сеттеры
```js
var object = {
    getA: function(){ return this._a },
    setA: function(a){ this._a = a },
    _a: 0
};
```

В этом случае нам придется вызывать разные методы для записи и чтения.
```js
object.setA(5);
var a = object.getA();

object.setA(object.getA() + 50);
```

JavaScript-like геттер и сеттер в одном методе
```js
var object = {
    a: function(a){
        if(a === undefined){
           return this._a;
        }
        this._a = a;
    },
    _a: 0
};
```

Теперь для получения и установки значения мы будем использовать один и тот же метод.

```js
object.a(5);
var a = object.a();

object.a(object.a()+50);
```

C#-like свойства, добавленные в ES5.
```js
var object = {
    get a(){ return this._a; },
    set a(a){ this._a = a; },
    _a: 0
};
```

В таком случае для пользователя они будут выглядеть как обычные поля.
```js
object.a = 10;
var a = object.a;

object.a += 50;
```

Удобно! И многие советуют использовать их, не задумываясь о том, к чему это может привести. Давайте запустим наши бенчмарки и посмотрим на результат.

## Бенчмарки
Обычный тест-кейз выглядит примерно так.
```js
suite.add("getter setter", ()=>{
    var object = {
        get a() {
            return this._a
        },
        set a(a){
            this._a = a
        },
        _a: 0
    };

    object.a = 5;
    var a = object.a;

    object.a = -10;
    a = object.a;

    object.a += 50;

}).add(...)
```

Как видите, мы каждый раз создаем новый объект и делаем с ним пару элементарных операций. Остальные кейзы похожи, если нужно - ссылка на репозиторий в начале статьи.

Теперь посмотрим на результаты.

```js
getter setter x 101,345 ops/sec ±10.55% (51 runs sampled)
get set as different methods x 3,551,570 ops/sec ±3.15% (58 runs sampled)
get set as single method x 3,526,852 ops/sec ±9.67% (57 runs sampled)
Fastest is get set as different methods
```

Вот так дела. Геттеры и сеттеры из ES5 примерно в 30 раз медленнее обычных методов! А казалось, что сладкая жизнь уже близко. Но может быть дело в том, что мы каждый раз создаем новый объект? Может быть, если объект создать один раз, а потом с ним работать, все станет лучше? 

```js
var object1 = {
    get a() {
        return this._a
    },
    set a(a){
        this._a = a
    },
    _a: 0
};
suite.add("getter setter", ()=>{

    object1.a = 5;
    var a = object1.a;

    object1.a = -10;
    a = object1.a;

    object1.a += 50;

}).add(...)
```
Смотрим.

```js
getter setter x 442,306 ops/sec ±1.19% (63 runs sampled)
get set as different methods x 9,404,500 ops/sec ±1.58% (69 runs sampled)
get set as single method x 6,134,129 ops/sec ±3.97% (64 runs sampled)
Fastest is get set as different methods
```
Действительно стале лучше, однако свойства все-еще сильно отстают от методов. Почему же так происходит? Ответ - оптимизация.

## Оптимизации V8
NodeJS, Chrome, Opera и множество других сред работают на JavaSript движке V8. V8 компилирует JS в нативный код, который также оптимизируется во время исполнения. Оптимизируется каждая функция по отдельности, и только в случае, если V8 замечает, что она достаточно часто вызывается. Подробно про оптимизации написано в [этой статье](http://habrahabr.ru/company/mailru/blog/273839), нам же из нее важно то, что V8 не оптимизирует функции, в которых встречает свойства, т.е. get x() и set x(). Более того, похоже, что не оптимизируются и функции, в которых идет обращение к этим свойствам. Поэтому использовать их не стоит от слова совсем, несмотря на их милый внешний вид.

Самостоятельно посмотреть, чем V8 занимается в своих недрах в плане оптимизации можно, написав несколько простых вспомогательных функций. Заметьте функции, начинающиеся с % - это особые функции, и для их работы нужно запускать NodeJS с особыми флагами.

```js
warm: function(fn){
    fn();
    fn();
    %OptimizeFunctionOnNextCall(fn);
    fn();
}, 
printStatus: function(fn, name){
    switch(%GetOptimizationStatus(fn)) {
        case 1: console.log("Function is optimized: " + name); break;
        case 2: console.log("Function is not optimized: " + name); break;
        case 3: console.log("Function is always optimized: " + name); break;
        case 4: console.log("Function is never optimized: " + name); break;
        case 6: console.log("Function is maybe deoptimized: " + name); break;
        case 7: console.log("Function is optimized by TurboFan: " + name); break;
        default: console.log("Unknown optimization status: " + name); break;
    }
}
```
Опишем каждый из способов в своей функции и посмотрим, оптимизируются они или нет
```js
// optimizations.js

utils.warm(getterSetter);
utils.printStatus(getterSetter, "getterSetter");
```

Запустим. 
```sh
$ node --trace_opt --trace_deopt --allow-natives-syntax optimizations.js 
```

В консоль выведется небольшой рассказ о том, что V8 делал с нашим кодом, однако из всего него нам важно следующее
```sh
[compiling method 0x3d2b910877e9 <JS Function getterSetter (SharedFunctionInfo 0x37765cc0cd29)> using Crankshaft]
[aborted optimizing 0x3d2b910877e9 <JS Function getterSetter (SharedFunctionInfo 0x37765cc0cd29)> because: Object literal with complex property]
...
Function is not optimized: getterSetter
```

Как видно, компилятор скорчил кислую рожу и просто отказался оптимизировать нашу функции, внутри которой были свойства. С другими-же функциями такого не произошло.
```sh
[compiling method 0x3d2b91087849 <JS Function getSetMethods (SharedFunctionInfo 0x37765cc0cdd1)> using Crankshaft]
[optimizing 0x3d2b91087849 <JS Function getSetMethods (SharedFunctionInfo 0x37765cc0cdd1)> - took 0.174, 0.330, 0.238 ms]
Function is optimized: getSetMethods
[compiling method 0x3d2b910878a9 <JS Function getSetAsOneMethod (SharedFunctionInfo 0x37765cc0ce79)> using Crankshaft]
[optimizing 0x3d2b910878a9 <JS Function getSetAsOneMethod (SharedFunctionInfo 0x37765cc0ce79)> - took 0.158, 0.526, 0.187 ms]
Function is optimized: getSetAsOneMethod
```
## Выводы
Из последнего бенчмарка видно, что если вам важна скорость, стоит использовать Java-like сеттеры и геттеры, даже несмотря на их перегруженный синтаксис. Не совсем понятно, почему объединение в один метод так сильно стало проигрывать лишь тогда, когда мы вынесли создание объекта из функции - с этим еще предстоит разобраться. 

## В [следующей статье]()
Мы рассмотрим различные методы создания и наследования классов.
