const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutes = require ('./routes/posts');
const morgan = require ('morgan'); 
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true})
.then(() => console.log('DB connected'));

mongoose.connection.on('error', err => {
	console.log(`Error connecting to the DB: ${err.message}`);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

//app.get('/', getPosts);

app.listen(port, () => {
	console.log("Stuff");
});