var express = require('express'),
    serveIndex = require('serve-index'),
    multer = require('multer');

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

