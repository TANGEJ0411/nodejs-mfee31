
// Promise 是一個表示非同步運算的最終完成或失敗的物件。
// 1. Promise 是一個物件 new Promise()
//    new Promise(executor)
//    executor: function(resolve, reject) {}
// 2. 執行非同步工作
// 3. 最終完成或失敗
//    完成 -> 呼叫 resolve
//    失敗 -> 呼叫 reject

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
// 初始狀態會是 pending
// 當非同步工作完成的時候 -> 呼叫 resolve -> promise 的狀態會變成 fulfilled
// 當非同步工作失敗的時候 -> 呼叫 reject -> promise 的狀態會變成 rejected
let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);
let brushPromise = doWorkPromise('刷牙', 3000);
brushPromise
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error('發生錯誤', err);
	});