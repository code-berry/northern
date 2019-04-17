const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('main.ejs');
});

app.post('/', (req,res) => {
	let importantApplicant = [req.body.email, req.body.interests]; // I've been working with objects
	// recently, so ideally I'd work with those over arrays. I just had trouble console logging that.
	res.render("thanks.ejs", {formInput: importantApplicant, email: req.body.email});
});


app.listen(PORT, () => {
	console.log(`Application started on ${PORT}`);
});