angular.module('gitApi')
  .controller('AppController', ['$http', '$scope', '$location', '$rootScope', 'gitApiService', 'auth', function($http, $scope, $location, $rootScope, gitApiService, auth) {
    $scope.username = "";
    $scope.auth = auth;
    $scope.loaded = false;
    console.log($scope.auth);
    $scope.store = [];
    $scope.defaultpage = true;
    $scope.showDetails = false;
    $scope.sho

    // $scope.person.Error = "User not found";

    $scope.getUser = function() {
      $scope.defaultpage = false;
      console.log($scope.username);
      var getUserCb = function(data) {
        console.log(data);
        $scope.auth = data;
        $scope.loaded = true;
        $scope.showDetails = true;
        //$location.path('partials/personDetails');
      };
      gitApiService.getUser($scope.username, getUserCb);

    };
    $scope.getRepo = function() {
      $scope.defaultpage = false;
      var getUserCb = function(data) {
        console.log(data);

        $scope.store = data;
        console.log($scope.store);
        $scope.loaded = true;
        //$location.path('partials/personDetails');
      };
      gitApiService.getRepo($scope.username, getUserCb);

    };

    // $scope.getRepos = function() {
    //   console.log("I see you");
    //   $scope.loaded = true;
    //  $scope.store = gitApiService.getRepo($scope.username);
    //  console.log($scope.store);


    // };
  }]);
