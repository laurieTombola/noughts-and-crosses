(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby')
        .directive('playerOptions', [function(){
            return {
                restrict: 'E',
                templateUrl: 'html/player-options.html'
            };
        }]);
})();