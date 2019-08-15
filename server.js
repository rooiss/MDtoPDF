const express = require('express');
const bodyParser = require('body-parser');
const Readable = require('stream').Readable;
const markdownpdf = require('markdown-pdf');

const app = express();

app.use(bodyParser.urlencoded ({
    extended: true
}))
app.set('view engine', 'ejs')

// Route
app.get('/', function(req, res){
    res.render('index')
});

// route for post
app.post('/pdf', function (req,res) {
    const stream = new Readable();
    stream._read = () => {};
    var MD = req.body.MD;
    // what does line 24 do?
    res.set('Content-Disposition', 'attachment');
    res.set('Content-type', 'application/pdf');
    stream.pipe(markdownpdf())
        .pipe(res);
    stream.push(MD);
    stream.push(null);
})

// MORE REQUIREMENTS 
// user be able to download in different formats
// user can specify file name in a different input

app.listen(1337)