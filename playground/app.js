const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
	body = Buffer.concat(body).toString();
	console.log(body);
    response.end(body);
  });
}).listen(3000);