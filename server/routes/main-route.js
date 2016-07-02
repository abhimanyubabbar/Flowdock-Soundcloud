(function(){

  var express = require('express');
  var url = require('url');
  var mainRouter = express.Router();
  var bunyan = require('bunyan');
  var logger = bunyan.createLogger({name: 'main-route'});

  mainRouter.get('/', function(req, res){
    var parts = url.parse(req.url, true);
    logger.info(parts);
    res.render('main.html')
  });

  mainRouter.get('/ping', function(req, res){
    logger.info('call to ping endpoint');
    res.json({service : "flowdock-soundcloud", response: "pong"});
  });

  module.exports = mainRouter;

})();