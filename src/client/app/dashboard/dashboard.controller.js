(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', '$window', 'dataservice', 'logger'];
  /* @ngInject */
  function DashboardController($q, $window, dataservice, logger) {
    var vm = this;
    vm.searchQuery = 'avengers';
    vm.news = {
      title: 'Movie in Focus'
    };
    vm.messageCount = 0;
    vm.movies = [];
    vm.currentMovie = {};
    vm.title = 'Dashboard';
    vm.search = searchMovies;
    vm.clickMovie = clickMovie;
    vm.dataTableOptions = {
      headerHeight: 30,
      columns: [{
        name: 'Poster',
        prop: 'Poster',
        width: 100,
      }, {
        name: 'Title',
        prop: 'Title',
      }, {
        name: 'Year',
        prop: 'Year',
      }],
      scrollbarV: false,
      externalPaging: true
    };

    activate();

    function activate() {
      var promises = [getMessageCount(), getMovies()];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function (data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getMovies() {
      return dataservice.getMovies().then(function (data) {
        vm.movies = data.Search;
        vm.currentMovie = vm.movies[0];
        return vm.movies;
      });
    }

    function searchMovies() {
      return dataservice.searchMovies(vm.searchQuery).then(function (data) {
        vm.movies = data.Search;
        vm.currentMovie = vm.movies[0];
        return vm.movies;
      });
    }

    function clickMovie(movie) {
      $window.scrollTo(0, 0);
      vm.currentMovie = movie;
    }
  }
})();
