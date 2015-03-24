angular.module('gitApi', ['ngMaterial','ngRoute'])

.config(['$mdThemingProvider','$routeProvider',function($mdThemingProvider,$routeProvider) {

 

  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('orange');

     $routeProvider
      .when('/',
      {
        controller: 'AppController',
        templateUrl: 'partials/default.html'
      });

}]);