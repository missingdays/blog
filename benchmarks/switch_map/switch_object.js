/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;
var SwitchMap = require("./switchMap");

		var s = {
			"0": function(){ return 1 + 1 },
			"1": function(){ return 2 + 2 },
			"2": function(){ return 3 + 3 },
			"3": function(){ return 4 + 4 },
			"def": function(){ return 5 + 5 } 
		};

suite.add("switch", ()=>{
	var a = 1, b = 3, c = 2, d = Math.floor(Math.random()*5);

	switch(d){
		case 0:
			a = b - c;
			break;
		case 1:
			a = b + c;
			break;
		case 2:
			a = c - b;
			break;
		case 3:
			c = a + b;
			break;
		default:
			c = a - b;	
	}

}).add("object", ()=>{


		var key = Math.floor(Math.random()*5);

		if(s[key]){
			var a = s[key]();
		} else {
			var a = s.def();
		}

}).on("cycle", (event)=>{
    console.log(String(event.target));
}).on("complete", function(){
    console.log("Fastest is " + this.filter("fastest").map("name"))
}).run({ async: true });