'use strict';

/**
 * @ngdoc function
 * @name shotsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shotsApp
 */
angular.module('shotsApp')
  .controller('MainCtrl', function ($scope, APIService) {
  	$scope.shots = APIService.connect('shots').query();
  });
