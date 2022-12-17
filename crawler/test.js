const mysql = require('mysql2/promise');

(async()=>{
	const connection =await mysql.createConnection({
		host: '127.0.0.1',
		port: 3306,
		user: '',
		password : '',
		database : 'stock_mfee31',
	});
	let [result, fields] =await connection.query('SELECT * FROM `stocks`');
	console.log(result);
	connection.end();
})();