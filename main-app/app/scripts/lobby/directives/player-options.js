(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby')
        .directive('playerOptions', ['$templateCache' ,function($templateCache){
            return {
                restrict: 'E',
                template: $templateCache.get('html/player-options.html')
            };
        }]);
})();