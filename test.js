console.log('hello');
function hello() {
	console.log('world');
}
hello();

let myPromise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		let now = new Date();
		resolve(`這是成功的回傳方法 ${now.toISOString()}`);
	}, 1000);
	//reject('這是回傳失敗的方法');
});

console.log(myPromise);


let a={
	a:1,
	b:2,
	c:{
		d:3
	}
};
let b ={a};
//console.log(b);
//b.a=5;
console.log(b);
console.log(a);