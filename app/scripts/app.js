'use strict';

/**
 * @ngdoc overview
 * @name analyzerClientWebappApp
 * @description
 * # analyzerClientWebappApp
 *
 * Main module of the application.
 */
angular
  .module('analyzerClientWebappApp', [
    'ngCookies',
    'ngRoute',
    'uiGmapgoogle-maps',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
