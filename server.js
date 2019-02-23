const express = require('express')
const https = require('https');

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!');
	console.log("Hello World");
});
app.get('/check', (req, res) => {
	res.send('right');
	console.log("connected");
});
app.get('*', (req, res) => {
	console.log(`url is ${req.url}`);
	res.redirect(req.url.slice(1,));
	console.log(`going to ${req.url.slice(1,)}`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
