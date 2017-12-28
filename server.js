var express = require('express');
var app = express();
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views','./views');

//middleware-pośrednik
app.use('/store', function(req, res, next){
    console.log('Pośrednik przy żądaniu do /store');
    next();
});
//strona startowa
app.get('/', function (req, res) {
    res.send('Hello from shop!');
});
//sklep
app.get('/store', function (req, res) {
    res.send('To jest sklep');
});
//strona wygenerowana poprzez PUG
app.get('/first-template', function(req, res) {
	res.render('first-template');
});
//zadanie app login
app.get('/login', function(req, res) {
	res.render('login', {
		title: "Aplikacja do logowania",
		link: "https://accounts.google.com/SignUp?hl=pl"
	});
});




app.use(function(req, res, next) {
	res.status(404).send('zła ścieżka!')
});
app.listen(3000);