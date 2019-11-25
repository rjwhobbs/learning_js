const express = require('express');
const app = express();
const postRoutes = require ('./routes/posts');
const morgan = require ('morgan');


app.use(morgan('dev'));
app.use('/', postRoutes);

//app.get('/', getPosts);

app.listen(3000, () => {
	console.log("Stuff");
});