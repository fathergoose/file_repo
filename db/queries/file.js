var db = require('../db');

module.exports = {
    getAllFiles: getAllFiles,
    getFile: getFile,
    createFile: createFile,
    updateFile: updateFile,
    removeFile: removeFile,
};

function getAllFiles(req, res, next) {
    db.any('SELECT * FROM files').then(function (data) {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'retrieved all files'
        });
    }).catch(function (err) {
        return next(err);
    });
}

function getFile(req, res, next) {
    var sql = 'SELECT * FROM files WHERE id=$1';
    var id = parseInt(req.params.id);

    db.one(sql, id).then(function (data) {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'retrieved one file'       
        });
    }).catch(function (err) {
        return next(err);
    });
}

function createFile(req, res, next) {
    var sql = [
        'INSERT INTO files (name, path, hash)',
        'VALUES(${originalname}, ${path}, ${hash})'
    ].join('');

    db.none(sql, req.file).then(function () {
        res.status(200).json({
            status: 'success',
            message: 'inserted one file'
        });
    }).catch(function (err) {
        return next(err);
    });
}

function updateFile() {}
function removeFile() {}
