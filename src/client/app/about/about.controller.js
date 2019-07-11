(function() {
  'use strict';

  angular
    .module('app.about')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['logger'];
  /* @ngInject */
  function AboutController(logger) {
    var vm = this;
    vm.title = 'About';

    activate();

    function activate() {
      logger.info('Activated About View');
    }
  }
})();
