var http = require('http')
	app = require('./config/express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping');

http.createServer(app).listen('3000', function(){
	console.log('rodando');
})