const express = require ('express');
const app = express();
const mid = require ('./my_mid_ware.js');
const wiki = require('./wiki.js');
const hostname = 'localhost';
const port = '8080';

app.use('/wiki/about', mid.midware);
app.use('/wiki', wiki);
// app.get('/', (req, res) => {
// 	res.send("THIS IS SOME TEXT");
// });

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
})
