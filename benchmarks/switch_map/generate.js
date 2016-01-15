// Generates cases for benchmarking

for(var i = 0; i < 100; i++){
	console.log("case " + i + ":");
	if(i % 2){
		console.log(`    a = b ${i%4 ? "-" : "+"} c;`);
	} else {
		console.log(`    b = c ${i%3 ? "-" : "+"} a;`);
	}
	console.log("    break;")
}

console.log("\n\n");

for(var i = 0; i < 100; i++){
	console.log(`"${i}": function(){ return ${i} + ${i}; },`);
}