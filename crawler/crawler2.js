const axios=require('axios');
const fs = require('fs');
let readFilePromise = new Promise((resolve, reject) => {
    fs.readFile('stock.txt', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

try{
    (async ()=>{
        let data = await readFilePromise;
        let stockNo = data;
        let date = '20221111';
        let crawler = await axios.get(`http://54.71.133.152:3000/stocks`, {
        params: {
            'stockNo':stockNo,
            date,
        },
        });
        console.log(crawler.data);
    })();
}catch(err){
    console.log(err);
}


