printHello1();
function printHello1() {
	console.log("No timer 1");
}

console.log(printHello2());
function printHello2() {
	console.log("before running sing2");
	setTimeout(() => {
		console.log("With timer 2");
	}, 6000);
	console.log("after running sing2");
	return "a1";
}

printHello3();
function printHello3() {
	console.log("No timer 3");
}
