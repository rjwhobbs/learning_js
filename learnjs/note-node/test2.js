function test(message, callback) {
	console.log(`This was your argument: ${message}`);

	if (typeof callback === "function") {
		callback(217, "I am an argument");
	}
};

test("howzit", function(num, str) {
	console.log("I am the callback");
	console.log(num);
	console.log(str);
});
