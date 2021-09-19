//pure
function getSquare(a) {
	return a * a;
}
console.log(getSquare(2));

//Not pure
function getRandom(a) {
	return Math.random();
}
console.log(getRandom());

//Not pure
const minAge = 21;
function isEligible(age) {
	return age < minAge;
}
console.log(isEligible(20));
