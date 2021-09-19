import { Person } from "./module_person";

export class Teacher extends Person {
	constructor(name, degree) {
		super(name), (this.degree = degree);
	}

	teach() {
		console.log("teaching " + this.degree);
	}
}
