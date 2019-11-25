const fs = require ('fs');

const data = fs.readFileSync('txt.txt');

console.log(data.toString());
console.log("I sync this worked...");