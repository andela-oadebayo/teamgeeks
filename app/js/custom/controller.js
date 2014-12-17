'Use Strict';

 var teamgeeksApp = angular.module('teamgeeksApp', []);

 teamgeeksApp.controller('TeamgeeksController',['$scope', '$http', function($scope,$http){
    $http.get('https://api.github.com/users').success(function(data){
      $scope.gitUsers = data;
      console.log(data);
    });
      // $scope.hobbies = ["Dami", "Mirabel", "Angular", "NodeJS"];
      // $scope.name = "Mirabel";
      // $scope.age = 35;
      // $scope.goodInAngular = true;
  }]);