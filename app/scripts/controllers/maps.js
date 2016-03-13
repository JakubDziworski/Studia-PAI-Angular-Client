'use strict';

/**
 * @ngdoc function
 * @name analyzerClientWebappApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the analyzerClientWebappApp
 */
angular.module('analyzerClientWebappApp')
  .controller('MapsCtrl', function ($scope) {
    $scope.map = { center: { latitude: 51.76, longitude: 19.45 }, zoom: 13 };
  });
