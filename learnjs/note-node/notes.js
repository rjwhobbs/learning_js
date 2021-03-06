const fs = require('fs');

var fetchNotes = () => {
	try {
		var noteString  = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	data = JSON.stringify(notes);
	fs.writeFileSync('notes-data.json', data);	
}

module.exports.addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	
	var duplicates = notes.filter((fishpaste) => fishpaste.title === title);

	if (duplicates.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

module.exports.getAll = () => {
	return fetchNotes();
}

module.exports.getNote = (title) => {
	debugger;
	let notes = fetchNotes();
	let noteToRead = notes.filter(fishpaste => fishpaste.title === title);
	return noteToRead[0]; 
}

module.exports.removeNote = (title) => {
	let notes = fetchNotes();
	let updatedNotes = notes.filter((fishpaste) => fishpaste.title !== title);
	saveNotes(updatedNotes);
	return notes.length !== updatedNotes.length;
}

module.exports.logNote = (note) => {
	console.log(`Title:\n${note.title}`);
	console.log(`\nBody:\n${note.body}`);
}