var index = require('./index');
var users = require('./users');
var puppies = require('./puppies');

module.exports = function (app) {
	app.use('/', index);
	app.use('/users', users);
	app.use('/api/puppies', puppies);	
}