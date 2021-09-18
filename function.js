var name = "Allan";

printHello1(name);
function printHello1(a) {
	console.log("Hi " + a);
}

printHello2(name, "A", "Brown"); //Hi Allan|A|Brown
function printHello2(a, b, c) {
	console.log("Hi " + a + "|" + b + "|" + c);
}

printHello2(name, "A"); //Hi Allan|A|undefined

function printHello4(a) {
	return "print ret " + a;
}
console.log(printHello4(name)); //print ret Allan

function printHello5(a) {
	return;
}
console.log(printHello5(name)); //undefined
