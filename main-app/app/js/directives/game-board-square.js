(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .directive('gameBoardSquare', [function(){
            return {
                restrict: 'E',
                scope: {
                    squareNumber: '@squareNumber'
                },
                template: function(scope, element, attributes){
                    return '<div class="image{{board[' + element.squareNumber + ']}}" ng-click="clickBox(' + element.squareNumber+ ')"></div>';
                }
            };
        }]);
})();