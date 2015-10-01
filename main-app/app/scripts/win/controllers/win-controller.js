(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Win')
        .controller('Win', ['$scope', '$interval',function($scope, $interval){
            $scope.e = '';
            $scope.show1 = false;

            $scope.$on('$viewContentLoaded', function(){
                $interval(function(){
                    $scope.e += 'e';
                    if($scope.e.length === 6){
                        $scope.show1 = true;
                    }
                }, 400, 6);
            });
        }]);
})();