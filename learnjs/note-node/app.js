const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note == undefined) {
		console.log(`${argv.title} already exits.`);
	} else {
		console.log("Note created.")
		notes.logNote(note);
	}
} else if (command === 'list') {
	let allNotes = notes.getAll();
	console.log(`Available notes: ${allNotes.length}`);
	allNotes.forEach(note => {
		console.log('-------');
		notes.logNote(note);
	});
} else if (command === 'read') {
	let noteToRead = notes.getNote(argv.title);
	if (noteToRead !== undefined) {
		console.log('Reading...');
		notes.logNote(noteToRead);
	} else {
		console.log(`Sorry can't read ${argv.title}. Please check your title.`);
	}
} else if (command === 'remove') {
	let removeStatus = notes.removeNote(argv.title);
	let message = removeStatus ? `${argv.title} removed.` : 
								`${argv.title} not removed. Please check your title.`;
	console.log(message);
} else {
	console.log('Command not found.');
}
