'use strict';

describe('Directive: race', function () {

  // load the directive's module
  beforeEach(module('rclResultsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should compile', inject(function ($compile) {
    element = angular.element('<race></race>');
    element = $compile(element)(scope);
  }));
});