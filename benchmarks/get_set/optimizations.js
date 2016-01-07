/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var utils = require("../utils");

function getterSetter(){
    var object = {
        get a(){ return this._a; },
        set a(a){ this._a = a; },
        _a: 0
    };

    object.a = 10;
    var a = object.a;

    object.a += 50;
}

function getSetMethods(){
    var object = {
        getA: function(){ return this._a; },
        setA: function(a){ this._a = a; },
        _a: 0
    };

    object.setA(5);
    var a = object.getA();

    object.setA(-10);
    a = object.a;

    object.setA(object.getA() + 50);
}

function getSetAsOneMethod(){
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

}

utils.warm(getterSetter);
utils.printStatus(getterSetter, "getterSetter");

utils.warm(getSetMethods);
utils.printStatus(getSetMethods, "getSetMethods");

utils.warm(getSetAsOneMethod);
utils.printStatus(getSetAsOneMethod, "getSetAsOneMethod");
