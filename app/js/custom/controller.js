'Use Strict';

 var teamgeeksApp = angular.module('teamgeeksApp', []);

 teamgeeksApp.controller('TeamgeeksController', function($scope){

  $scope.hobbies = ["Dami", "Mirabel", "Angular", "NodeJS"];
  $scope.name = "Mirabel";
  $scope.age = 35;
  $scope.goodInAngular = true;

 });