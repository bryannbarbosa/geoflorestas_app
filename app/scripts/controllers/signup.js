'use strict';

/**
 * @ngdoc function
 * @name shotsApp.controller:SignupctrlCtrl
 * @description
 * # SignupctrlCtrl
 * Controller of the shotsApp
 */
angular.module('shotsApp')
  .controller('SignupctrlCtrl', function ($scope) {
    $scope.users = [];
    $scope.addUser = function(user) {
      $scope.users.push(angular.copy(user));
    }
  });
