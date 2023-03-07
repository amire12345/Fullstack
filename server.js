/*if (process.env.NODE_ENV !== 'production') {
	require('dotenv').parse();
}*/

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

mongoose
	.connect(
		'mongodb+srv://Openclassroom:11MI321&&vie@openclassroomcluster0.nh0lyye.mongodb.net/?retryWrites=true&w=majority',
	)
	.then(() => console.log('Connexion à MongoDB réussie'))
	.catch(() => console.log('Connexion à MongoDB échoué'));
/*const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.error('Connected to Mongoose'));*/

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
