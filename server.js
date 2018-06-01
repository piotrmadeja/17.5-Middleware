var express = require('express');
var app = express();
var color = require('colors');

app.use('/store', function(req, res, next) {   //middleware
  console.log('Jestem pośrednikiem przy żądaniu do '.green + '/store'.yellow);
  next();
});

app.get('/', function (req, res) {
  res.send('Main');
});

app.get('/store', function (req, res) {
  res.send('Sklep...');
});

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});