const address = {
	addressline: "12 street",
	city: "palo",
	state: "ca",
	country: "us",
};

for (let property in address) {
	console.log(property);
}

let cars = ["bmw", "benz", "jaguar", "tesla", "volvo"];
for (let value of cars) {
	console.log(value);
}
