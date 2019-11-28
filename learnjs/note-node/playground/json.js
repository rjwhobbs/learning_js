// let personString = '{"name": "Roger", "car": 10}';
// let person = JSON.parse(personString);

// console.log(person.car);

const fs = require('fs');

var orig_note = {
	title: 'This is a title ma chana',
	body: 'And this is a body ma bru'
}

var orig_note_string = JSON.stringify(orig_note);

fs.writeFileSync('notes.json', orig_note_string);

var note_string = fs.readFileSync('notes.json');

new_note_obj = JSON.parse(note_string);

console.log(typeof new_note_obj);
console.log(new_note_obj.title);

