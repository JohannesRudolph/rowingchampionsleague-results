'use strict';

/* jshint multistr:true */

/**
 * @ngdoc directive
 * @name rclResultsApp.directive:race
 * @description
 * # race
 */
angular.module('rclResultsApp')
  .directive('race', function () {
    return {
      template: '<div class="race">\
			<table class="table table-bordered table-hover">\
			 	<col>\
			 	<col width="60px"> \
				<tr class="header"> \
					<th class="title"><span editable-text="race.title">{{race.title}}</span></th>\
					<th class="time"><span editable-text="race.time">{{race.time}}</span></th>\
				</tr>\
				<tr class="lane" ng-class="{\'team-highlighted\': highlighted.teamId == race.lane1.teamId}" ng-click="laneClicked(race.lane1)">\
					<td><span editable-number="race.lane1.teamId">({{race.lane1.teamId}})</span> {{teams[race.lane1.teamId-1].shortTitle}}<img ng-if="race.lane1.teamId > 0" ng-src="images/flags/{{teams[race.lane1.teamId-1].country}}.png"></td>\
					<td><div class="time" editable-text="race.lane1.time">{{race.lane1.time}}</div></td>\
				</tr>\
				<tr class="lane" ng-class="{\'team-highlighted\': highlighted.teamId == race.lane2.teamId}" ng-click="laneClicked(race.lane2)">\
					<td><span editable-number="race.lane2.teamId">({{race.lane2.teamId}})</span> {{teams[race.lane2.teamId-1].shortTitle}}<img ng-if="race.lane2.teamId > 0" ng-src="images/flags/{{teams[race.lane2.teamId-1].country}}.png"></td>\
					<td><div class="time" editable-text="race.lane2.time">{{race.lane2.time}}</div></td>\
				</tr>\
			</table>\
		</div>',
      restrict: 'E',
      scope: {
        race: '=data',
        teams: '=',
        highlighted: '='
      },
      link: function (scope) {
        scope.laneClicked = function (lane) {
          scope.highlighted.teamId = scope.highlighted.teamId === lane.teamId ? -1 : lane.teamId;
        };
      }
    };
  });