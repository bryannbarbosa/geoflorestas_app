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
    var accessToken = '61d9c13fd5d8d884e64a856a9d1c477f088079a4205f79e500da6c0bd10f4821';
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
