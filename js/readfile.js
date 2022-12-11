const fs= require('fs');
//error-first callback
// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err){
//         //如果err有值，表示有錯誤發生
//         //這裡要處理錯誤
//         console.error(err);
//     }else{
//         console.log(`complete`,data);
//     }
// });

const readFilePromise = function (textName, code) {
    return new Promise((resolve, reject) => {
        fs.readFile(textName,code,(err,data) => {
            if(err){
                //如果err有值，表示有錯誤發生
                //這裡要處理錯誤
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
};
// const readFilePromise=new Promise((resolve, reject) => {
//     fs.readFile('test1.txt','utf-8',(err,data) => {
//         if (err) {
//             //如果err有值，表示有錯誤發生
//             //這裡要處理錯誤
//             reject(err);
//         } else {
//             resolve(data);
//         }
//     });
// });

/* readFilePromise().then((data)=>{
    console.log('then成功 : '+data);
}).catch((err)=>{
    console.log('catch失敗 : '+err);
}) */

//用IIFE寫async

(async () => {
    try{
        let data = await readFilePromise('test.txt','utf-8');
        console.log('await',data);
    }catch(err){
        console.log(err);
    }
})();
