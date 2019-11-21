const math = require('./helpers');
const readline = require("readline");

rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a number ', (answer) => {
	res = math.is_prime(answer);
	console.log(res);
	rl.close();
});