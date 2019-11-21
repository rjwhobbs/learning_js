function is_prime(n) {
	if (n == 2)
		return 1;
	if (n == 3)
		return 1
	if (n % 2 == 0)
		return 0;
	if (n % 3 == 0)
		return 0;
	
	let i = 5;
	let w = 2;

	while (i * i <= n)
	{
		if (n % i == 0)
			return 0;
		i += w;
		w = 6 - w;
	}
	return 1;
}

module.exports = {
	is_prime
}