const express = require('express');
const app = express();

var port = process.env.PORT || 8000;

app.get('/', function(req, res){
  res.send("Hello GET");
  console.log("HELLO GET");
});

app.post('/', function(req, res){
  res.send("Hello POST");
  console.log("HELLO POST");
});

app.listen(port, function(req, res){
  console.log("Welcome to the server!! - ",port);
});
