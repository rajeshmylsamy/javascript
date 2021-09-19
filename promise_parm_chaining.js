//success with parameter
const p3 = (val) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(val + 10);
		}, 1000);
	});

p3(10).then(console.log);

//chaining
p3(10)
	.then((x) => x + 5)
	.then(console.log);

//20
//25
