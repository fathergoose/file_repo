var serveIndex = require('serve-index');
var path = require('path');
var express = require('express');
var tracks = require('./tracks');
var albums = require('./albums');

module.exports = function (app) {
    // app specific routes; config for SPA is in ../app.js
    app.use('/repo/files', express.static(path.join(__dirname, '../files')));
    app.use('/api/tracks', tracks);
    app.use('/api/albums', albums);
};