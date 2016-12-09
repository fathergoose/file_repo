var pgp = require('pg-promise')();

var config = {
    host: 'localhost',
    port: 5433,
    database: 'file_repo',
    user: 'alilseman',
    password: 'password'
};

var db = pgp(config);

exports.db = db;
