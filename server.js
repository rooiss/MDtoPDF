const express = require('express');
const app = express();

app.set('view engine', 'ejs')

// Route
app.get('/', function(req, res){
    res.render('index')
});

// route for post
app.post('/pdf', function (req,res) {

})

app.listen(1337)