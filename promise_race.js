//succcess 1
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("succeeded to run p1");
	}, 300);
});

//succcess
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("failed to run p2");
	}, 500);
});

//success with parameter
const p3 = (val) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(val + 10);
		}, 2000);
	});

//All
Promise.race([p1, p2, p3(8)])
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});

//succeeded to run p1
