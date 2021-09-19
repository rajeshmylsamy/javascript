//functions compoistion
let input = " Javascript ";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrapInSpan = (str) => `<span>${str}</span>`;
const toLowerCase = (str) => str.toLowerCase();
console.log(wrapInSpan(wrapInDiv(toLowerCase(trim(input)))));

//currying
function add(a) {
	return function (b) {
		return a + b;
	};
}

//currying with arrow
const arrowAdd = (a) => (b) => a + b;

const add1 = add(10);
console.log(add1(20));

console.log(add(10)(20)); //30
console.log(arrowAdd(20)(20)); //40

//usecase
const wrap = (tag1) => (tag2) => (str) =>
	`<${tag1}><${tag2}>${str}<${tag2}></${tag1}>`;
console.log(wrap("span")("div")("javascript"));
//<span><div>javascript<div></span>
