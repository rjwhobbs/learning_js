const fs = require('fs');

fs.readFile('txt.txt', (err, data) => {
	if (err) 
		console.log(err);
	else 
		console.log(data.toString());
})

console.log ("I'll start.");