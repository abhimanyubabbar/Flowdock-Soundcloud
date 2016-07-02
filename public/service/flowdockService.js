(function(){

  'use strict';

  angular.module('flowdock-soundcloud')
      .service('FlowdockService', ['$log', FlowdockService]);

  function FlowdockService($log){
    $log.info('Flowdock service initialized.');

    return {

    };
  }

})();