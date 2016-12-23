var fs = require('fs');
var db = require('../db');

module.exports = {
    getAllTracks: getAllTracks,
    getTrack: getTrack,
    createTrack: createTrack,
    removeTrack: removeTrack,
};

function getAllTracks(req, res, next) {
    db.any('SELECT * FROM tracks').then(function (data) {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'retrieved all tracks'
        });
    }).catch(function (err) {
        return next(err);
    });
}

function getTrack(req, res, next) {
    var sql = 'SELECT * FROM tracks WHERE id=$1';
    var id = parseInt(req.params.id);

    db.one(sql, id).then(function (data) {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'retrieved one track'
        });
    }).catch(function (err) {
        return next(err);
    });
}

function createTrack(req, res, next) {
    var sql = [
        'INSERT INTO tracks (title, path, hash, url, tracknum, album, artist)',
        'VALUES(${title}, ${path}, ${hash}, ${url}, ${tracknum}, ${album}, ${artist})'
    ].join(' ');
    req.file.url = '/repo/files/' + req.file.filename;

    db.any(sql, req.file).then(function () {
        res.status(200).json({
            status: 'success',
            message: 'inserted one track'
        });
    }).catch(function (err) {
        return next(err);
    });
}

function removeTrack(req, res, next) {
    var sql = 'DELETE FROM tracks WHERE id=$1 RETURNING path'
    var id = parseInt(req.params.id);
    db.result(sql, id).then(function (result) {
        if (result.rowCount > 0) {
            result.rows.forEach(function (row) {
                try {
                    fs.unlink(row.path, function (err) {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    });
                } catch (error) {
                    console.log(err); 
                }
            });
        }
        res.status(200).json({
            status: 'success',
            message: result
        });
    }).catch(function (err) {
        return next(err);
    });
}
