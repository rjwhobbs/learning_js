const http = require('http');

const server = http.createServer((req, resp) => {
	resp.end("Howzit my chanaSSSS!");
});

server.listen(3000);