var express = require('express');


// App setup
var app = express();
var port = process.env.PORT || 8080;

var server = app.listen(port, function(){
    console.log('listening for requests on port 8080');
});

// Static files
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('index.html');
});