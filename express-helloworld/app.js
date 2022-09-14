var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello v3\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.get('/jupiter', function(req, res) {
  res.send('Hello Jupiter!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

