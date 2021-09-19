function sayHello() {
	return "Hi";
}

//assign to variable
let fun = sayHello;
console.log(fun()); //Hi

//pass as an argumnet
function greet(funName) {
	return funName();
}
console.log(greet(sayHello)); //Hi

//return function
function getOrder() {
	return function () {
		return "food";
	};
}

let orderFun = getOrder();
console.log(orderFun()); //food

//highorder functions
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((number) => number * 2));

setTimeout(() => console.log("from timer"), 100);

//functions compoistion
let input = " Javascript ";
let output = "<div>" + input.trim() + "</div>";
console.log(output);

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
console.log(wrapInDiv(toLowerCase(trim(input))));
