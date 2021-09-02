import angular from "angular";
import $ from 'jQuery'

export const myModule = angular.module(
	'stopwatch',
	[]
);

angular.module('stopwatch')
	.component(
		'stopwatch',
		{
			template: `<div class="stopwatch">
                        <div class="stwDisplay">
                            <h1 class="stwHour">{{ hour.pad(2) }}</h1>
                            <h1 class="stwColon">:</h1>
                            <h1 class="stwMinute">{{ minute.pad(2) }}</h1>
                            <h1 class="stwColon">:</h1>
                            <h1 class="stwSecond">
								{{ displaySecond.pad(2) }}
							</h1>
                        </div>
                        <div class="StopwachButtons">
                            <button type="button" class="stwStartButton" ng-click="start()">Start</button>
                            <button type="button" class="stwStopButton" ng-click="stop()">Stop</button>
                            <button type="button" class="stwResetButton" ng-click="reset()">Reset</button>
                            <button type="button" class="stwDeleteButton" ng-click="delete()">Delete</button>                                  
                        </div>
                    </div>`,
		'controller': [ '$scope', '$timeout', '$element', function($scope, $timeout, $element) {
				$scope.totalSec = 0;
				$scope.displaySecond = 0;
				$scope.minute = 0;
				$scope.hour = 0;
				$scope.startTime = true;

				$scope.incrementSecond = async function () {
					while ($scope.startTime) {
						// Await $timeout( function(){ $scope.totalSec += 1; }, 1000 );
						await new Promise(resolve => $timeout(resolve, 1000));
						if ($scope.startTime === false) {
							break;
						}
						$scope.totalSec += 1;
						$scope.calcTime();
						$scope.$apply();
					}
				};

				$scope.start = function () {
					$scope.startTime = true;
					$scope.incrementSecond();
					$element.find('.stwStartButton').hide();
					$element.find('.stwStopButton').show();
				};

				$scope.stop = function () {
					$scope.startTime = false;
					$element.find('.stwStartButton').show();
					$element.find('.stwStopButton').hide();
				};
				$scope.reset = function () {
					$scope.totalSec = 0;
					$scope.stop();
					$scope.calcTime();
				};
				$scope.delete = function () {
					$scope.stop();
					$element.hide();
				};
				$scope.calcTime = function () {
					$scope.displaySecond = $scope.totalSec % 60;
					$scope.minute = parseInt($scope.totalSec % 3600 / 60, 10);
					$scope.hour = parseInt($scope.totalSec / 3600, 10);
				};
			} ]
		}
	);

	angular.module('stopwatch').controller(
		'MyController',
		[ '$scope', '$compile', ($scope, $compile) => {
			$scope.newStopwach = function () {
				const html = $compile(`  <div style="display: flex; justify-content: center; margin-top: 20px">
											<stopwatch></stopwatch>
										</div>`)($scope);
				const stwListRef = document.getElementById('stwList');
				angular.element(stwListRef).append(html);
			};
		} ]
	);


