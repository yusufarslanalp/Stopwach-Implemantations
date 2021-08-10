angular.module('stopwatch', []);

angular.module('stopwatch').
    component('stopwatch', {
        template: `<div class="stopwatch">
                        <div class="stwDisplay">
                            <h1 class="stwHour">{{ hour.pad(2) }}</h3>
                            <h1 class="stwColon">:</h3>
                            <h1 class="stwMinute">{{ minute.pad(2) }}</h3>
                            <h1 class="stwColon">:</h3>
                            <h1 class="stwSecond">{{ displaySecond.pad(2) }}</h3>
                        </div>
                        <div class="StopwachButtons">
                            <button type="button" class="stwStartButton" ng-click="start()">Start</button>
                            <button type="button" class="stwStopButton" ng-click="stop()">Stop</button>
                            <button type="button" class="stwResetButton" ng-click="reset()">Reset</button>
                            <button type="button" class="stwDeleteButton" ng-click="delete()">Delete</button>                                  
                        </div>
                    </div>`,
        controller: function($scope, $timeout, $element){
        
            $scope.totalSec = 0;
            $scope.displaySecond = 0;
            $scope.minute = 0;
            $scope.hour = 0;
            $scope.startTime = true;

            $scope.incrementSecond = async function () {
                while( $scope.startTime )
                {
                    //await $timeout( function(){ $scope.totalSec += 1; }, 1000 );
                    await new Promise(r => setTimeout(r, 1000 ));
                    if( $scope.startTime === false )
                    {
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
                $element.find( ".stwStartButton" ).hide();
                $element.find( ".stwStopButton" ).show();
            }; 

            $scope.stop = function () {
                $scope.startTime = false;
                $element.find( ".stwStartButton" ).show();
                $element.find( ".stwStopButton" ).hide();
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
            
            
            $scope.calcTime = function() {
                $scope.displaySecond = $scope.totalSec % 60 ;
                $scope.minute = parseInt( ( $scope.totalSec % 3600) / 60 ); 
                $scope.hour = parseInt( $scope.totalSec / 3600 );
            };

            Number.prototype.pad = function(size) {
                var s = String(this);
                while (s.length < (size || 2)) {s = "0" + s;}
                return s;
            }  

        }
    });

    angular.module('stopwatch').controller('myCtrl', function($scope, $compile) {

        $scope.newStopwach = function ( ) {
            var html = $compile( `  <div style="display: flex; justify-content: center; margin-top: 20px">
                                        <stopwatch></stopwatch>
                                    </div>` )($scope);
            var stwListRef = document.getElementById( "stwList" );
            angular.element( stwListRef ).append(html);
            
        };

        $scope.foo = function () {
            console.log( "foo" );
            
        };        
    });