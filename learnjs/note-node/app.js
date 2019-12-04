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
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	let removeStatus = notes.removeNote(argv.title);
	let message = removeStatus ? `${argv.title} removed.` : 
								`${argv.title} not removed. Please check your title.`;
	console.log(message);
} else {
	console.log('Command not found.');
}
