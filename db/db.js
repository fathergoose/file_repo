var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgPromise = require('pg-promise')(options);

var config = {
    host: 'localhost',
    port: 5432,
    database: 'file_repo',
    user: 'alilseman',
    password: 'password'
};

module.exports = pgPromise(config);
