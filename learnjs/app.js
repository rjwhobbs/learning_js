const http = require ('http');

const hostname = 'localhost';
const port = '8080';

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end("Hoezit wereld!");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});