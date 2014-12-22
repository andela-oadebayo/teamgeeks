'Use Strict';

var teamgeeksApp = angular.module('teamgeeksApp', []);
var TeamgeeksController = teamgeeksApp.controller;
teamgeeksApp.controller('TeamgeeksController',['$scope', '$http', function($scope,$http){
  $scope.searchUser = function() {
    $http.get("https://api.github.com/users/"+ $scope.userName ).success(function(data){
      $scope.gitUsers = data;
      if($scope.gitUsers.company === ""){
        $scope.gitUsers.company = "andela";
      }
      console.log(data); 
    });
  };
  // $scope.hobbies = ["Dami", "Mirabel", "Angular", "NodeJS"];
  // $scope.name = "Mirabel";
  // $scope.age = 35;
  // $scope.goodInAngular = true;
}]);
