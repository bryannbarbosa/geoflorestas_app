'use strict';

/**
 * @ngdoc function
 * @name shotsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shotsApp
 */
angular.module('shotsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.series = ['Pizza1', 'Pizza Hut'];
    $scope.labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"];
    $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.pizza = [436, 338];
    $scope.pizzarias = ['Pizza1', 'Pizza Hut'];
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
  };
});
