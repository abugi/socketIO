const express = require('express');
const http = require('http');
http.Server(app);

app.get('/', function(req, res){
     res.send('<h1>Hello World</h1>');
});

http.listen(3000, function(){
     console.log('We are live on port 3K');
});