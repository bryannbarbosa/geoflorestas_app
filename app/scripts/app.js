'use strict';

/**
 * @ngdoc overview
 * @name shotsApp
 * @description
 * # shotsApp
 *
 * Main module of the application.
 */
angular
  .module('shotsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngResource',
    'chart.js',
    'ui.mask',
    'ngMap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cadastro', {
        templateUrl: 'views/signupctrl.html',
        controller: 'SignupctrlCtrl',
        controllerAs: 'signupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
