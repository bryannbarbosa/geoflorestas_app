'use strict';

/**
 * @ngdoc service
 * @name shotsApp.APIService
 * @description
 * # APIService
 * Factory in the shotsApp.
 */
angular.module('shotsApp')
  .factory('APIService', function ($resource) {
    return {
      connect: function (params) {
        return $resource('https://api.dribbble.com/v1/'+params);
      }
    };
  });
