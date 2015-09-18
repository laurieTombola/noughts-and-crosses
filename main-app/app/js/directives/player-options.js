(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('playerOptions', [function(){
            return {
                restrict: 'E',
                templateUrl: 'partials/player-options.html'
            };
        }]);
})();