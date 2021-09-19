//functions compoistion
let input = " Javascript ";
let output = "<div>" + input.trim() + "</div>";
console.log(output);

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
console.log(wrapInDiv(toLowerCase(trim(input))));

//lodash
import { compose, pipe } from "lodash/fp";
const transform = compose(wrapInDiv, toLowerCase, trim); //read from right to left
transform(input);
const transform2 = pipe(trim, toLowerCase, wrapInDiv); //read from left to right
transform2(input);
