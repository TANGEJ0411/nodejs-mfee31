const axios = require('axios');
const fs = require('node:fs/promises');
const moment =require('moment');
const mysql = require('mysql2/promise');
require('dotenv').config();

/* let readFilePromise = new Promise((resolve, reject) => {
    fs.readFile('stock.txt', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }); */


	
(async () => {
	let connection;
	try {
		let data = await fs.readFile('stock.txt', { encoding: 'utf8' });
		let stockNo = data;
		let date = '20221111';
		let crawler = await axios.get('http://54.71.133.152:3000/stocks', {
			params: {
				'stockNo': stockNo,
				date,
			},
		});
		console.log(crawler.data);
	} catch (err) {
		console.error(err);
	}finally{
		if(connection){
			connection.end();
		}
	}
})();


