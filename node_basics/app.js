const {square , is_prime} = require('./helpers');
const readline = require('readline');

rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a number ', (answer) => {
	res = square(answer);
	console.log(res);
	rl.close();
});