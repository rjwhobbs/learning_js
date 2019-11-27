const fs = require('fs');
const os = require('os');

var user = os.userInfo();

console.log(user);

fs.appendFile('message.txt', 'howzit ' + user.username, (err) => {
	if (err) throw err;
});