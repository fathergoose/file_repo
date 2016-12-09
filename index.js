var express = require('express'),
    serveIndex = require('serve-index'),
    multer = require('multer'),
    db = require('./db/config');

var app = express();
var upload = multer({ dest: 'root/' });

app.use('/files', serveIndex('root', {'icons': true}));
app.use('/files', express.static('root'));

app.post('/upload', upload.single('lefile'), function (req, res) {
    console.log(req.file);
    res.send('goodbye');
});

app.listen(3030, function () {
    console.log('Listening on localhost:3030');
});

db.any('select * from things')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });
