const fs = require('fs');

fs.watchFile('txt.txt', () => console.log('File changed.')); 