angular.module('gitApi').factory('gitApiService', ['$http', function($http) {

  var url = 'https://api.github.com/users/';
  return {
    getUser: function(query, callback) {
      $http.get(url + query)
        .success(function(data) {
          callback(data);
        }).error(function(error) {
          callback(error);
        });
    },
  getRepo :function(query, repocallback) {
    console.log("got me");
      $http.get(url + query + "/repos")
      .success(function (data) {
        repocallback(data);
        }).error(function(error) {
          repocallback(error);
        });
       }
  };
  /* 







        */
}]);
