const mysql = require('mysql');

let conn = mysql.createConnection({
	host: 'localhost',
	user: 'test_root',
	password: 's55oQsBuoDvyr2HB',
	socketPath: '/goinfre/rhobbs/Desktop/Server/mysql/tmp/mysql.sock'

});

conn.connect((err) => {
	if (err) throw err;
	console.log("Connection established");
});