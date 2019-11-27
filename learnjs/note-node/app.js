const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const func = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('true'));
console.log(_.isString('1'));
console.log(_.isString(1));
//console.log(func.add(11, -5));
// var user = os.userInfo();

// console.log(user);

// fs.appendFile('message.txt', 'howzit ' + user.username, (err) => {
// 	if (err) throw err;
// });