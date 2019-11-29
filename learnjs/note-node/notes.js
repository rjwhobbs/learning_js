const fs = require('fs');

module.exports.addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};
	try {
		var noteString  = fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
	} catch (e) {
		console.log("error adding note: " + e);
	}
	var duplicates = notes.filter((note) => note.title === title);

	if (duplicates.length === 0){
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));	
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