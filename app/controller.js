angular.module('gitApi')
  .controller('AppController', ['$http', '$scope', function($http, $scope) {
    $scope.person = this;
    $scope.person.Error = "User not found";
    var Url = 'https://api.github.com/users/';
    $scope.getUserName = function() {
      return $http.get(Url + $scope.person.username)
        .success(function(data) {
          $scope.user = data;
         /* $scope.person.username = data;*/
          console.log(data);
        }).error(function() {
          return $scope.person.Error;
        });
    }

  }]);
