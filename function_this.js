const person = {
	name: "john",
	walk() {
		console.log(this);
	},
};

person.walk(); //{ name: 'john', walk: [Function: walk] }

const walk = person.walk;
//walk(); //window object

const walk1 = person.walk.bind(person);
walk1(); //{ name: 'john', walk: [Function: walk] }
