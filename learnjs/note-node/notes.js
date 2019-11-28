module.exports.addNote = (title, body) => {
	console.log('Your title: ' + title, 'Your body: ' + body);
};

module.exports.getAll = () => {
	console.log('Getting all notes.');
}

module.exports.getNote = (title) => {
	console.log('Getting: ' + title);
}

module.exports.removeNote = (title) => {
	console.log('Removing: ' + title);
}