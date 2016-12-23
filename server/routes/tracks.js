/*
    TODO:
        Refactor this for use with tracks
*/

var path = require('path');
var express = require('express');
var multer = require('multer');
var queries = require('../db/queries/file');
var md5 = require('md5-file/promise');
var taglib = require('taglib2');

var router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../files'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({ storage: storage });

function hashFile (req, res, next) {
    md5(req.file.path).then(function (hash) {
        req.file.hash = hash;
        next();
    }).catch(function (err) {
        return next(err);
    });
}

function readTags(req, res, next) {
    try {
        req.file.tag = taglib.readTagsSync(req.file.path);
    } catch (err) {
        next(err);
    }
    next();
}

router.get('/', queries.getAllFiles);
router.get('/:id', queries.getFile);
router.post('/', upload.single('lefile'), hashFile, readTags, queries.createFile);
router.put('/:id', upload.single('lefile'), hashFile, readTags, queries.updateFile);
router.delete('/:id', queries.removeFile);

module.exports = router;
