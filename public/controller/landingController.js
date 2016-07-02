(function(){

  angular.module('flowdock-soundcloud')
      .controller('LandingController', ['$log','$window', LandingController]);

  function LandingController($log, $window){
    $log.info('Landing controller initialized');

    var self = this;
    function init(self){
    }

    self.authorize = function(){
      $window.location.href = 'https://api.flowdock.com/oauth/authorize?client_id=92bfdc6a926c0d212385e7af0584afd800ed0e6d60916e70c1a9b25e54a7048b&response_type=code&redirect_uri=http://localhost:8080';
    };

    init(self);
  }

})();