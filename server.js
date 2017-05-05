var express = require('express');

// Create our appCodeName

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
	console.log('server up on port 3000');
});