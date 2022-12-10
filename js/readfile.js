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

const readFilePromise = function () {
    return new Promise((resolve, reject) => {
        fs.readFile('test123.txt','utf-8',(err,data) => {
            if(err){
                //如果err有值，表示有錯誤發生
                //這裡要處理錯誤
                reject(`讀取檔案失敗${err}`);
            }else{
                resolve(`讀取檔案成功${data}`);
            }
        });
    })
}

readFilePromise().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})