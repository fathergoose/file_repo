var multer = require('multer');
var upload = multer({ dest: 'files/' });

app.post('/upload', upload.single('lefile'), function (req, res) {
    console.log(req.file);
    res.send('goodbye');
});
