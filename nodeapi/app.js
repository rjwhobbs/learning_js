const express = require('express');
const app = express();
const {getPosts} = require ('./routes/posts');
const morgan = require ('morgan');

const midware = (req, res, next) => {
	console.log("The thing in the middle");
	next();
}

app.use(morgan('dev'));
app.use(midware);

app.get('/', getPosts);

app.listen(3000, () => {
	console.log("Stuff");
});