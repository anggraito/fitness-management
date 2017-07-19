var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(req, res){
  res.send('hallo anggie and renata');
})

var Member = require('./models/member');

var member = require('./routers/member');

app.use('/member', member);

app.listen(3000)
