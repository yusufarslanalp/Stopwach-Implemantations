var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    stwObj = new Stopwatch( $scope );
    $scope.stwArr = [ stwObj ];
 
    $scope.newStopwatch = function (){
        $scope.stwArr.push( new Stopwatch( $scope ) );
    };

    $scope.getHour = function ( stopwatch ){
        return stopwatch.hour.pad(2);
    };

    $scope.getMinute = function ( stopwatch ){
        return stopwatch.minute.pad(2);
    };            

    $scope.getSecond = function ( stopwatch ){
        return stopwatch.displaySecond.pad(2);
    };

    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }  
});