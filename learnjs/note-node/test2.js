// function test(message, callback) {
// 	console.log(`This was your argument: ${message}`);

// 	if (typeof callback === "function") {
// 		callback(message);
// 	}
// };

// test("howzit", function(str) {
// 	console.log("I am the callback");
// 	console.log(str);
// });

let dataArr = [];

let uData = {
	name : "Joe",
	ocupation : "Farmer",
	location : "Brakpan"
}

function logStuff (stuff) {
	for (let i in stuff) {
		console.log(`${i} ${stuff[i]}`);
	}
}

function doStuff (things, callback) {
	dataArr.push(things);
	if (typeof callback === "function") {
		callback(things);
	}
}

doStuff(uData, logStuff);
console.log(dataArr);


