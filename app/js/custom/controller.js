'Use Strict';

 var teamgeeksApp = angular.module('teamgeeksApp', []);

 teamgeeksApp.controller('TeamgeeksController',['$scope', '$http', function($scope,$http){
    $http.get('js/custom/teamgeeks.json').success(function(data){
      $scope.persons = data;
    });
      // $scope.hobbies = ["Dami", "Mirabel", "Angular", "NodeJS"];
      // $scope.name = "Mirabel";
      // $scope.age = 35;
      // $scope.goodInAngular = true;
  }]);