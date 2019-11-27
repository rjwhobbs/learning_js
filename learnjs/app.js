//const http = require ('http');
const express = require ('express');
const app = express();
const hostname = 'localhost';
const port = '8080';

app.get('/', (req, res) => {
	res.send("THIS IS SOME TEXT");
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
})


// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-type': 'text/plain'});
// 	res.end("Hoezit wereld!");
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });