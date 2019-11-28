const fs = require('fs');

module.exports.addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};
	try {
		var noteString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
	} catch (e) {
		
	}
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