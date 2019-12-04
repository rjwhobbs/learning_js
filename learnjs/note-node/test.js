const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function (word) {
	if (word.length > 6) {
		return word;
	}
});

var ran = function random () {
	console.log("random");
}

const words2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result2 = words2.filter(word => word.length > 6);
console.log(result);
console.log(result2);

var str = 'undefined';
var str2;

debugger;

if (str == undefined) {
	console.log('== str');
}
if (str === undefined) {
	console.log('=== str');
}
if (str2 == undefined) {
	console.log('== str2');
}
if (str2 === undefined) {
	console.log('=== str2');
}