var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var url = require('url');
var engines = require('consolidate');

var bunyan = require('bunyan');
var logger = bunyan.createLogger({name: "main"});

var app = express();
var mainRoute = require('./server/routes/main-route');

// Middleware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname,'/public')));
app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// MyMdb API
app.use('/', mainRoute);

// PORT DEFINITION AND APP LISTENING.
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("SoundFlow listening on: " + port);
});

module.exports  = app;
