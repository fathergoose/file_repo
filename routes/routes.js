var puppies = require('./puppies');
var filePages = require('./pages/filePages');
var files = require('./files');
var serveIndex = require('serve-index');
var path = require('path');
var express = require('express');

module.exports = function (app) {
    app.use('/', express.static(path.join(__dirname, '../public')));
    app.use('/files', express.static(path.join(__dirname, '../files')));
    app.use('/files', serveIndex('files', {'icons': true}));
    app.use('/api/uploads', files);
    app.use('/api/puppies', puppies);   
    app.use('/pages/files', filePages);
};