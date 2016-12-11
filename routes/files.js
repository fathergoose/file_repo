var path = require('path');
var express = require('express');
var multer = require('multer');
var queries = require('../db/queries/file');
var md5 = require('md5-file/promise');

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


router.get('/', queries.getAllFiles);
router.post('/', upload.single('lefile'), hashFile, queries.createFile);

function hashFile (req, res, next) {
    md5(req.file.path).then(function (hash) {
        req.file.hash = hash;
        next();
    }).catch(function (err) {
        return next(err);
    });
}

module.exports = router;
