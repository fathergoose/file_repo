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


//=======DATABASE=====

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db/file_repo')

db.serialize(function () {
    db.run('CREATE TABLE lorem (info TEXT)')
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

    for (var i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i)
    }

    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info)
    })
})

db.close()
