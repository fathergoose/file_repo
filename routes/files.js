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

function hashFile (req, res, next) {
    md5(req.file.path).then(function (hash) {
        req.file.hash = hash;
        next();
    }).catch(function (err) {
        return next(err);
    });
}

function deleteFile (req, res, next) {
    fs.unlink();
}

router.get('/', queries.getAllFiles);
router.get('/:id', queries.getFile);
router.post('/', upload.single('lefile'), hashFile, queries.createFile);
router.put('/:id', upload.single('lefile'), hashFile, queries.updateFile); // Makes no sense
router.delete('/:id', queries.removeFile);

module.exports = router;
