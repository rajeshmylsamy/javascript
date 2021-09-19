//with promise statement and wait timer
async function asynFun() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("singing");
		}, 3000);
	});
}

async function funAwait() {
	consolelog("funAwait before call");
	const res = await asynFun();
	consolelog("funAwait result " + res);
	consolelog("funAwait after call");
	return res;
}

consolelog("main funAwait before asynFun call");
consolelog(funAwait()); //Promise { <pending> }
consolelog("main funAwait before asynFun call");

function consolelog(log) {
	console.log(new Date().toLocaleString() + " --> " + log);
}
