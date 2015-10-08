(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Win')
        .controller('Win', ['$scope', '$interval', '$state',function($scope, $interval, $state){
            $scope.e = '';
            $scope.show1 = false;

            $scope.$on('$viewContentLoaded', function(){
                loop();
            });

            var loop = function(){
                if($state.$current != 'win'){
                    return;
                }
                $interval(function(){
                    $scope.e += 'e';
                    if($scope.e.length === 10){
                        $scope.show1 = true;
                        $interval(function(){
                            if($scope.e.length > 0){
                                $scope.e = $scope.e.substring(0, $scope.e.length-1);
                            }
                            else {
                                console.log($scope.e.length);
                                loop();
                            }
                        }, 100, 11);
                    }
                }, 100, 10);
            };
        }]);
})();