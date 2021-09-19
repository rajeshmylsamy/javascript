//always return promise of result
async function asynFun() {
	return "singing";
}
consolelog("asynFun before call");
console.log(asynFun()); //Promise { 'singing' }
consolelog("asynFun after call");

//with promise statement and no timer
async function asynFun1() {
	return new Promise((resolve, reject) => {
		resolve("singing");
	});
}
consolelog("asynFun1 before call");
asynFun1().then((res) => consolelog("asynFun1 result " + res)); //sign1 singing
consolelog("asynFun1 after call");

function asynFun2() {
	setTimeout(() => {
		return "singing";
	}, 6000);
}

consolelog("asynFun2 before call");
consolelog("asynFun2 result " + asynFun2()); //sign3 undefined
consolelog("asynFun2 after call");

//with promise statement and wait timer
async function asynFun3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("singing");
		}, 3000);
	});
}
consolelog("asynFun3 before call");
asynFun3().then((res) => consolelog("asynFun3 result " + res)); //sign2 singing
consolelog("asynFun3 after call");

function consolelog(log) {
	console.log(new Date().toLocaleString() + " --> " + log);
}
