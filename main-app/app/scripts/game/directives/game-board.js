(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .directive('gameBoard', [function(){
            return {
                restrict: 'E',
                templateUrl: 'html/game-board.html'
            };
        }]);
})();