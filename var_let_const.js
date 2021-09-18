var num;
let name = "john";
let age = 34;
let score = 2.35;
let isApproved = false;
var degree = null;

console.log(num); //undefined
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof score); //number
console.log(typeof isApproved); //boolean
console.log(typeof degree); //object

let interestRate = 1.5;
console.log(interestRate);
interestRate = 2.5;
console.log(interestRate); //2.5

name = true;
console.log(typeof name); //boolearn

var a = 10 + "20"; //give string 1020
console.log(a); //1020
console.log(typeof a); //string

var c = a + 10;
console.log(c); //102010
console.log(typeof c); //string

var fname = "allan";
console.log(fname.length); //4

var fname = "bro";
console.log(fname.length); //3

//const
const lname = "allan";
const lname = "bro"; //SyntaxError: Identifier 'lname' has already been declared
