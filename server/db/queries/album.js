var db = require('../db');

module.exports = {
    getAllAlbums: getAllAlbums
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