var path = require('path');
var express = require('express');
var multer = require('multer');
var queries = require('../db/queries/track');
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
    let tag;
    try {
        tag = taglib.readTagsSync(req.file.path);
    } catch (err) {
        next(err);
    }
    req.file.title = tag.title;
    req.file.artist = tag.artist;
    req.file.album = tag.album;
    req.file.tracknum = tag.track.toString();
    next();
}

router.get('/', queries.getAllTracks);
router.get('/:id', queries.getTrack);
router.post('/', upload.single('lefile'), hashFile, readTags, queries.createTrack);
router.delete('/:id', queries.removeTrack);

module.exports = router;
