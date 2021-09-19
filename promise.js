//failure
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("failed to run");
	}, 1000);
});

p1.then((result) => {
	console.log("then " + result);
}).catch((result) => {
	console.log("catch " + result);
});

//succcess
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("succeeded to run");
	}, 1000);
});

p2.then((result) => {
	console.log("then " + result);
}).catch((result) => {
	console.log("catch " + result);
});

//catch failed to run
//then succeeded to run
