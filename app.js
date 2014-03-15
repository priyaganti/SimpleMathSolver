
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var findPrime = require('./routes/findPrime');
var checkPrime =require('./routes/checkPrime');
var http = require('http');
var path = require('path');
var ejs = require("ejs");

var app = express();

var title = 'EJS template with Node.JS';
var data = 'Data from node';

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

app.get('/findprime', function (req, res) {
	ejs.renderFile('./views/displayprime.ejs',
			{title : title, data : data},
			function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
});

// Post method for get /find prime
app.post('/display', function (req, res) {
	console.log('going to display method');
	findPrime.displayPrime(function(err, results){
		if(err) {
			throw err;
		} else {
			ejs.renderFile('./views/prime.ejs',
					{results : results, data : data},
					function(err, result) {
						// render on success
						if (!err) {
							res.end(result);
						}
						// render or error
						else {
							res.end('An error occurred');
							console.log(err);
						}
					});
		}
	},req.param('number'));

});


app.get('/checkprime', function (req, res) {
	ejs.renderFile('./views/displayprime.ejs',
			{title : title, data : data},
			function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
});

//post method for get /checkPrime
app.post('/verify', function (req, res) {
	console.log('going to verify method');
	checkPrime.checkifPrime(function(err, results){
		if(err) {
			throw err;
		} else {
			ejs.renderFile('./views/verifyPrime.ejs',
					{results : results, data : data},
					function(err, result) {
						// render on success
						if (!err) {
							res.end(result);
						}
						// render or error
						else {
							res.end('An error occurred');
							console.log(err);
						}
					});
		}
	},req.param('chknumber'));

});

