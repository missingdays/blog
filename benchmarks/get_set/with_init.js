/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;

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

}).add("get set as different methods", ()=>{
    var object = {
        getA: function(){ return this._a },
        setA: function(a){ this._a = a },
        _a: 0
    };

    object.setA(5);
    var a = object.getA();

    object.setA(-10);
    a = object.a;

    object.setA(object.getA() + 50);

}).add("get set as single method", ()=>{
    var object = {
        a: function(a){
            if(a === undefined){
                return this._a;
            }
            this._a = a;
        },
        _a: 0
    };

    object.a(5);
    var a = object.a();

    object.a(-10);
    a = object.a();

    object.a(object.a()+50);

}).on("cycle", (event)=>{
    console.log(String(event.target));
}).on("complete", function(){
    console.log("Fastest is " + this.filter("fastest").map("name"))
}).run({ async: true });
