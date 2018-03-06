// ------------Express-----------------
 

var express = require('express');
var app = express();
var path = require('path');


// var routes = require('./api/routes');

app.set('port', process.env.PORT); // application variable; only have to set port once;  used with app.get('port') in the app.listen function

// app.use(function(req, res, next){
// 	console.log(req.method, req.url);
// 	next();
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));




var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
	console.log("Magic happens on port "+ port);
});
