//succcess 1
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("succeeded to run p1");
	}, 1000);
});

//succcess
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("failed to run p2");
	}, 1000);
});

//success with parameter
const p3 = (val) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(val + 10);
		}, 1000);
	});

//All
Promise.allSettled([p1, p2, p3(8)])
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});

// [
// 	{ status: 'fulfilled', value: 'succeeded to run p1' },
// 	{ status: 'rejected', reason: 'failed to run p2' },
// 	{ status: 'fulfilled', value: 18 }
// ]
