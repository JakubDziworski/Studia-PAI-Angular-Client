'use strict';

/**
 * @ngdoc function
 * @name analyzerClientWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the analyzerClientWebappApp
 */


angular.module('analyzerClientWebappApp')
  .controller('MainCtrl', function ($scope,ConnectionService) {
    var connectionStatus = ConnectionService.getDefaultConnectionStatus();
    $scope.webServiceAddress="192.168.0.1";
    $scope.getBtnStatus = function() {
      return ConnectionService.getBtnStatus(connectionStatus);
    };
    $scope.getBtnText = function() {
      return ConnectionService.getBtnText(connectionStatus);
    };
    $scope.$watch('webServiceAddress',function() {
      connectionStatus = ConnectionService.getDefaultConnectionStatus();
    });
    $scope.connect = function() {
      connectionStatus=CONNECTION_STATUS.CONNECTING;
      ConnectionService.establishConnection($scope.webServiceAddress)
        .then(function(newConnectionStatus) {
          connectionStatus=newConnectionStatus;
        });
    }
  });
