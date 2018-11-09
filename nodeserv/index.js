
let express = require('express');
let app = express();
let config = require('./books.json');



app.get('/api/books', function(req, res){
    res.send(config);
});

app.get('/api/books/:id', function(req, res){
    res.send(config[req.params.id]);
});
app.listen(3001);



