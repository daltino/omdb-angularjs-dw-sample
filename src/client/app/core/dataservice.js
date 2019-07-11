(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var omdbUrl = 'http://www.omdbapi.com';
    var omdbKey = '99842c57';
    var omdbType = 'movie';
    var defaultMovieQuery = 'avengers';
    var queryUrl = omdbUrl + '/?apikey=' + omdbKey + '&s=' + defaultMovieQuery + '&type=' + omdbType;

    var service = {
      getMovies: getMovies,
      searchMovies: searchMovies,
      getMessageCount: getMessageCount
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getMovies() {
      return $http.get(queryUrl)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getMovies')(e);
      }
    }

    function searchMovies(searchQuery) {
      var searchUrl = omdbUrl + '/?apikey=' + omdbKey + '&s=' + searchQuery + '&type=' + omdbType;
      return $http.get(searchUrl)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getMovies')(e);
      }
    }
  }
})();
