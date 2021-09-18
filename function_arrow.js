const person = function (num) {
	return num * num;
};
console.log(person(2)); //4

const squareSingle = (num) => num * num;
console.log(squareSingle(4)); //16

const square = (num) => {
	return num * num;
};
console.log(square(3)); //9

var a = [1, 2, 3];
var b = a.filter((val) => val != 2);
console.log(b); //1,3

//Callback function without arrow fun, It retruns window obj
const org = {
	name: "john",
	walk() {
		setTimeout(function () {
			console.log(this);
		}, 1000);
	},
};
console.log(org.name);
org.walk(); //Timeout { _idleTimeout: 1000,

//Callback function with arroy fun, It returns object reference
const orgArray = {
	name: "allan",
	walk() {
		setTimeout(() => {
			console.log(this);
		}, 1000);
	},
};
console.log(orgArray.name);
orgArray.walk(); //{ name: 'allan', walk: [Function: walk] }
