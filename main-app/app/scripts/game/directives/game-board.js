(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .directive('gameBoard', ['$templateCache' ,function($templateCache){
            return {
                restrict: 'E',
                template: $templateCache.get('html/game-board.html')
            };
        }]);
})();