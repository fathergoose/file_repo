var db = require('../db');

module.exports = {
    getAllAlbums: getAllAlbums,
    getTracksFromAlbum: getTracksFromAlbum
};

function getAllAlbums(req, res, next) {
    var sql = [
        'SELECT DISTINCT album, artist',
        'FROM tracks'
    ].join(' ');
    db.any(sql).then(function (data) {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'retrieved all albums'
        });
    }).catch(function (err) {
        return next(err);
    });
}

function getTracksFromAlbum(req, res, next) {
    var sql = [
        'SELECT id, url, title, artist, album, tracknum',
        'FROM tracks',
        'WHERE album=$1'
    ].join(' ');

    db.any(sql, req.params.album).then(function (data) {
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'heres your album, sir'
        });
    }).catch(function (err) {
        return next(err);
    });
}