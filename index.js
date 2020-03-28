const express = require('express');
const app = express();
const path = require('path');
const apiRequest = require(path.join(__dirname, 'routes/apiRequest'));
const port = 3000;


app.use(express.static('views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use("/*", apiRequest);


app.listen(port, function() {
	console.log(`app started on url http://localhost:${port}/`);
});

//const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());