let doWorkPromise = function (job, timer) {
	// 1. 物件 -> new
	return new Promise((resolve, reject) => {
		// 2. 執行非同步工作
		setTimeout(() => {
			let now = new Date();
			resolve(`完成工作 ${job} at ${now.toISOString()}`);
		}, timer);
	});
};
let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);

//await 一定要在 async裡面 -> await可以暫停這個函式先執行其他函式，當有return resolve或reject時才會接著做
//要promise才可以用await

async function doJob() {
	try {
		let result1 = await doWorkPromise('刷牙', 3000);
		console.log('這是 await 後的結果', result1);

		let result2 = await doWorkPromise('刷牙', 3000);
		console.log('這是 await 後的結果', result2);

		let result3 = await doWorkPromise('刷牙', 3000);
		console.log('這是 await 後的結果', result3);
	} catch (err) {
		console.log('發生錯誤', err);
	} finally {
		console.log('出門去');
	}

}

doJob();
console.log('after');