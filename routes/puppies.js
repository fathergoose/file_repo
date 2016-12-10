var express = require('express');
var router = express.Router();

// Tutorial
var db = require('../db/puppyQueries');

// Tutorial
router.get('/', db.getAllPuppies);
router.get('/:id', db.getSinglePuppy);
router.post('/', db.createPuppy);
router.put('/:id', db.updatePuppy);
router.delete('/:id', db.removePuppy);

module.exports = router;
