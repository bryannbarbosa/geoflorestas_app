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
    'ngResource'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    var accessToken = 'YOUR_CLIENT_ACCESS_TOKEN';
    $httpProvider.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
