//Scope of if i is inside the function
printHello();
function printHello() {
	for (var i = 0; i < 5; i++) {
		console.log("printHello " + i);
	}
	console.log(i); //5
}

//Scope of if i is only inside the block
printHelloLet();
function printHelloLet() {
	for (let i = 0; i < 5; i++) {
		console.log("printHello " + i);
	}
	console.log(i); //ReferenceError: i is not defined
}
