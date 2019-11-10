'use strict';

/**
 * @ngdoc overview
 * @name rclResultsApp
 * @description
 * # rclResultsApp
 *
 * Main module of the application.
 */

function shouldEnableAdminMode() {
  return window.location.hash.indexOf('admin=true') > 0;
}

var modules = [
  'ngRoute'
];

if (shouldEnableAdminMode()) {
  modules.push('xeditable');
  console.log('enabled admin mode');
}


var app = angular
  .module('rclResultsApp', modules)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/results/:league', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

if (shouldEnableAdminMode()) {
  app.run(function (editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    editableOptions.buttons = 'no';
  });
}