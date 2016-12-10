var path = require('path');
var express = require('express');
var multer = require('multer');
var queries = require('../db/queries/file');

var router = express.Router();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../files'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
var upload = multer({ storage: storage });

router.get('/', queries.getAllFiles);
router.post('/', upload.single('lefile'), queries.createFile);

module.exports = router;