var queries = require('../../db/queries/file');
var db = require('../../db/db');
var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, err) {
	db.any('SELECT * FROM files').then(function (data) {
		res.render('files/index', {'files': data});
	});
});


module.exports = router;