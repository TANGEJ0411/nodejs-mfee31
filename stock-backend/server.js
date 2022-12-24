// eslint-disable-next-line no-undef
const {application}=require('express');
const express = require('express');
// 用express這個框架建立一個web app
const app = express();
require('dotenv').config();
const mysql2 = require('mysql2/promise');
//允許跨元存取
const cors = require('cors');
app.use(cors({
	origin:'*', //真的環境要寫好真正的自己前端網址
}));

// (async () => {
// 	let connection = await mysql2.createConnection({
// 		host: process.env.DB_HOST,
// 		port: process.env.DB_PORT,
// 		user: process.env.DB_USER,
// 		password: process.env.DB_PASSWORD,
// 		database: process.env.DB_NAME,
// 	});
// })();

let pool = mysql2.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	// 限制 pool 連線數的上限
	connectionLimit: 10,
});
//設定express處理靜態檔案
//express內建不需要安裝任何東西
//建立靜態檔案的路由
//app.use('/2048',express.static('./static'));

// 中間件
app.use('/',(req, res, next) => {
	console.log('第一個中間件');
	next();
});
app.use('/2048',(req, res, next) => {
	console.log('第二個中間件');
	next();
});
app.use((req, res, next) => {
	console.log('第三個中間件');
	next();
});

app.get('/api/stocks', async (req, res, next) => {
	// let results = await connection.query('SELECT * FROM stocks');
	// let data = results[0];
	let [data] = await pool.query('SELECT * FROM stocks');
	res.json(data);
});
app.get('/api/stocks/:stockId',async (req,res,next)=>{
	let [data] = await pool.query('SELECT * FROM stock_prices WHERE stock_id=?',[req.params.stockId]);
	res.json(data);
});

// 路由中間件
app.get('/test', (req, res, next) => {
	console.log('test頁面');
	res.send('Hello test 1');
});
app.get('/', (req, res) => {
	res.send('Hello Express 3');
});


// 可放在所有路由件的最後面
app.use((req, res, next) => {
	console.log('404無此網頁');
	res.send('404無此網頁');
});

app.listen(3001, () => {
	console.log('Server running at port 3001');
});
