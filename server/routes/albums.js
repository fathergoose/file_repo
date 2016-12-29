var path = require('path');
var express = require('express');
var queries = require('../db/queries/album');

var router = express.Router();

module.exports = router;

router.get('/', queries.getAllAlbums);