let cars = ["bmw", "benz", "jaguar", "tesla", "volvo"];

cars.map((car) => {
	console.log(car);
});

const items = cars.map((car) => `<li>${car}</li>`);
console.log(items);

const bars = cars.map((car) => "|${car}|");
console.log(bars);
