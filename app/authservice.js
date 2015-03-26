angular.module('gitApi')
  .factory('auth', ['$window', function($window) {
    return {
      data: $window.data
    };

  }]);
