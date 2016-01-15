/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;
var SwitchMap = require("./switchMap");

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

}).add("map", ()=>{

		var m = new SwitchMap();

		// Yeah, we need this for closure
		var o = {
			a: 1, 
			b: 3,
			c: 2,
			d: Math.floor(Math.random()*5)
		};
		
		m.add(0, function(){ o.a = o.b - o.c; });
		m.add(1, function(){ o.a = o.b + o.c; });
		m.add(2, function(){ o.a = o.c - o.b; });
		m.add(3, function(){ o.c = o.a + o.b; });

		m.addDefault(function(){ o.c = o.b - o.a });

		m.fire(o.d)

}).on("cycle", (event)=>{
    console.log(String(event.target));
}).on("complete", function(){
    console.log("Fastest is " + this.filter("fastest").map("name"))
}).run({ async: true });