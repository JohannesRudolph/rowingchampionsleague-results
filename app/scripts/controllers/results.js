'use strict';

/**
 * @ngdoc function
 * @name rclResultsApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the rclResultsApp
 */
angular.module('rclResultsApp')
  .controller('ResultsCtrl', function ($scope, $http, $routeParams, $interval, $window) {

    $scope.highlighted = {
      teamId: -1
    }; // highlight team 0

    $scope.league = {};

    function shouldEnableAdminMode() {
      return $window.location.hash.indexOf('admin=true') > 0;
    }

    $scope.showTeams = true;
    if ($window.location.hash.indexOf('teams=false') > 0) {
      $scope.showTeams = false;
    }

    function onLeagueChanged(newValue, oldValue) {
      if (oldValue === newValue) {
        return; // see http://stackoverflow.com/questions/16947771/how-do-i-ignore-the-initial-load-when-watching-model-changes-in-angularjs
      }

      console.log('changed, putting');
      $http.put('/data/' + $routeParams.league + '.php', $scope.league).success(function () {
        console.log('changed, putted ');
      });
    }

    function loadData() {
      $http.get('/data/' + $routeParams.league + '.json').success(function (data) {
        console.log("data loaded");
        $scope.league = data;
      });
    }

    loadData();

    if (shouldEnableAdminMode()) {
      $scope.$watch('league', onLeagueChanged, true);
    } else {
      $interval(loadData, 60 * 1000);
    }
  });