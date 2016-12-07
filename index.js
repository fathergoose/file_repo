var express = require('express'),
    serveIndex = require('serve-index'),
    multer = require('multer');

var app = express();

app.use('/files', serveIndex('root', {'icons': true}));
app.use('/files', express.static('root'));

app.post('/upload', function (req, res) {
    debugger;
    console.log(req.body);
});

app.listen(3030, function () {
    console.log('Listening on localhost:3030');
});

