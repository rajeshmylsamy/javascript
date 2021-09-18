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
