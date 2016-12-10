var db = require('../db');

module.exports = {
    getAllFiles: getAllFiles,
    getFile: getFile,
    createFile: createFile,
    updateFile: updateFile,
    removeFile: removeFile,
};

function getAllFiles(req, res, next) {
    db
    .any('SELECT * FROM files')
    .then(function (data) {
        res
        .status(200)
        .json({
            status: 'success',
            data: data,
            message: 'Retrieved All Files'
        });
    })
    .catch(function (err) {
        return next(err);
    });
} 

function createFile(req, res, next) {
    req.file.name = req.file.filename;
    req.file.hash = '1cfe8d82caab4c802aeb0ef4dee50704'; // mock md5
    var sql = [
        'INSERT INTO files (name, path, hash)',
        'VALUES(${originalname}, ${path}, ${hash})'
    ].join('');

    db.none(sql, req.file).then(function () {
        res.status(200).json({
            status: 'success',
            message: 'Inserted one file'
        });
    }).catch(function (err) {
        return next(err);
    });
}
function getFile() {};
function updateFile() {};
function removeFile() {};