var a;
if (a) {
	console.log("value equal");
} else {
	console.log("value not equal");
}
//value not equal

var a2 = "Hello";
if (a2) {
	console.log("value equal");
} else {
	console.log("value not equal");
}
//value equal

if (123 == "123") {
	console.log("== 123 equal");
} else {
	console.log("== 123 not equal");
}

if (1 == true) {
	console.log("== equal");
} else {
	console.log("== not equal");
}

if (123 === "123") {
	console.log("=== 123 equal");
} else {
	console.log("=== 123 not equal");
}

if (1 === true) {
	console.log("=== equal");
} else {
	console.log("=== not equal");
}
