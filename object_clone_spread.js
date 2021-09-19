//combined
const address1 = {
	addressline: "12 street",
	city: "palo",
};

const address2 = {
	state: "ca",
	country: "us",
};

const combined = { ...address1, ...address2 };
console.log(combined);

//without deep copy, inner object will get just get reference
const person = {
	name: "allan",
	address: {
		addressline: "12 street",
		city: "palo",
	},
};

const updatedPerson = { ...person };
updatedPerson.name = "allan brown";
updatedPerson.address.city = "redwood";
console.log(person);
console.log(updatedPerson);

// {
//   name: 'allan',
//   address: { addressline: '12 street', city: 'redwood' }
// }
// {
//   name: 'allan brown',
//   address: { addressline: '12 street', city: 'redwood' }
// }

//with deep copy, inner object will get just get reference
const person1 = {
	name: "colin",
	address: {
		addressline: "12 street",
		city: "palo",
	},
};

const updatedPerson1 = { ...person1, address: { ...person1.address } };
updatedPerson1.name = "findlay";
updatedPerson1.address.city = "redwood";
console.log(person1);
console.log(updatedPerson1);

// {
//   name: 'allan',
//   address: { addressline: '12 street', city: 'redwood' }
// }
// {
//   name: 'allan brown',
//   address: { addressline: '12 street', city: 'redwood' }
// }
