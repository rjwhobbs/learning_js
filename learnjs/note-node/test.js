var arr = [];
var cat = 'cat';

var test = '[{"this" : "that"}]';
var test2 = {
	cat	
};

arr = JSON.parse(test);
arr.push(test2);
console.log(arr);