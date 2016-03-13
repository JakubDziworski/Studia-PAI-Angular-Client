'use strict';

describe('Controller: MapsCtrl', function () {

  // load the controller's module
  beforeEach(module('analyzerClientWebappApp'));

  var MapsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapsCtrl = $controller('MapsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('map scope should be defined', function () {
    expect(scope).toBeDefined();
    expect(scope.map).toBeDefined();
  });

  it('map should point at lodz', function () {
    expect(scope.map.center.latitude).toBe(51.76);
    expect(scope.map.center.longitude).toBe(19.45);
    expect(scope.map.zoom).toBe(13);
  });

});
