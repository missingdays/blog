/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;

var object1 = {
    get a() {
        return this._a
    },
    set a(a){
        this._a = a
    },
    _a: 0
};

var object2 = {
    getA: function(){ return this._a; },
    setA: function(a){ this._a = a; },
    _a: 0
};

var object3 = {
    a: function(a){
        if(a === undefined){
            return this._a;
        }
        this._a = a;
    },
    _a: 0
};

suite.add("getter setter", ()=>{

    object1.a = 5;
    var a = object1.a;

    object1.a = -10;
    a = object1.a;

    object1.a += 50;

}).add("get set as different methods", ()=>{

    object2.setA(5);
    var a = object2.getA();

    object2.setA(-10);
    a = object2.a;

    object2.setA(object2.getA() + 50);

}).add("get set as single method", ()=>{

    object3.a(5);
    var a = object3.a();

    object3.a(-10);
    a = object3.a();

    object3.a(object3.a()+50);

}).on("cycle", (event)=>{
    console.log(String(event.target));
}).on("complete", function(){
    console.log("Fastest is " + this.filter("fastest").map("name"))
}).run({ async: true });
