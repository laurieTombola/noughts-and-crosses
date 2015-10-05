(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.Navbar')
        .controller('Navbar', ['$scope', '$state',function($scope, $state){
            $scope.goTo = function(stateToGoTo){
                $state.go(stateToGoTo);

            };
        }]);
})();