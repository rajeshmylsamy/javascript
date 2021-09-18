const person = {
	name: "john",
	walk() {
		console.log("walking");
	},
};

console.log(person.walk); //[Function: walk]

console.log(person.walk()); //walking
