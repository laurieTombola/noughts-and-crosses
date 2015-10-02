(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .directive('gameBoardSquare', [function(){
            return {
                restrict: 'E',
                template: function(element, attributes){
                    var html = '<div class="image{{board()['+ attributes.squareNumber+
                        ']}}" ng-click="clickBox('+attributes.squareNumber+')"></div>';
                    return html;
                }
            };
        }]);
})();