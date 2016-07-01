var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var bunyan = require('bunyan');
var logger = bunyan.createLogger({name: "main"});

var app = express();
var mainRoute = require('./server/routes/main-route');

// Middleware.
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

// MyMdb API
app.use('/', mainRoute);

// PORT DEFINITION AND APP LISTENING.
var port = process.env.PORT || 8080;
app.listen(port, '192.168.1.144', function(){
  console.log("SoundFlow listening on: " + port);
});

module.exports  = app;
