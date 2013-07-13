// 13/7/13 DHN Applied modifications to web.js as required to write the 
//             data from the index.html file
//
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var data = fs.readFileSync('index.html', 'utf-8');
  response.send(data.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
