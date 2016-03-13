'use strict';

/**
 * @ngdoc service
 * @name analyzerClientWebappApp.ConnectionService
 * @description
 * # ConnectionService
 * Service in the analyzerClientWebappApp.
 */


var CONNECTION_STATUS = {
  NOT_STARTED: 0,
  CONNECTING: 1,
  CONNECTED: 2,
  UNABLE_TO_CONNECT: 3
};

angular.module('analyzerClientWebappApp')
  .service('ConnectionService', function ($q,Restangular) {

    this.getDefaultConnectionStatus = function () {
      return CONNECTION_STATUS.NOT_STARTED;
    };

    this.getBtnStatus = function (status) {
      return status == CONNECTION_STATUS.NOT_STARTED ? "info" :
        status == CONNECTION_STATUS.CONNECTING ? "default disabled" :
          status == CONNECTION_STATUS.CONNECTED ? "success" :
            status == CONNECTION_STATUS.UNABLE_TO_CONNECT ? "danger" : "";
    };

    this.getBtnText = function (status) {
      return status == CONNECTION_STATUS.NOT_STARTED ? "Połącz" :
        status == CONNECTION_STATUS.CONNECTING ? "Łączenie" :
          status == CONNECTION_STATUS.CONNECTED ? "Połączono" :
            status == CONNECTION_STATUS.UNABLE_TO_CONNECT ? "Błąd połączenia" : "";
    };

    this.establishConnection = function (webServiceAddress) {
      var deffered = $q.defer();
      var customers = Restangular.oneUrl('posts','http://jsonplaceholder.typicode.com');
      customers.get().then(function(customerz) {
        alert(customerz);
        deffered.resolve(CONNECTION_STATUS.CONNECTED);
      }, function() {
        deffered.resolve(CONNECTION_STATUS.UNABLE_TO_CONNECT)
      });
      return deffered.promise;
    }
  });
