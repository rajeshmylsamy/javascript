class Person {
	constructor(name) {
		this.name = name;
	}

	walk() {
		console.log("walking " + this.name);
	}
}

const per1 = new Person();
per1.walk();

const per2 = new Person("brown");
per2.walk();

//Inheritance
class Teacher extends Person {
	constructor(name, degree) {
		super(name), (this.degree = degree);
	}

	teach() {
		console.log("teaching " + this.degree);
	}
}
const per3 = new Teacher("colin", "mbbs");
per3.walk();
per3.teach();
