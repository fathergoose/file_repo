var index = require('./index');
var users = require('./users');
var puppies = require('./puppies');
var serveIndex = require('serve-index');
var path = require('path');
var express = require('express');

module.exports = function (app) {
	app.use('/', express.static(path.join(__dirname, '../public')));
	app.use('/files', express.static(path.join(__dirname, '../files')));
	app.use('/files', serveIndex('files', {'icons': true}));
	app.use('/', index);
	app.use('/users', users);
	app.use('/api/puppies', puppies);	
}