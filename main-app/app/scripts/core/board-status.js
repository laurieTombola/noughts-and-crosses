(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('GameStatus', [function(){
            var me =  this;
            me.board = '000000000';

            me.getBoard = function(){
                return me.board;
            };

            me.setBoard = function(newBoard){
                me.board = newBoard;
            };

            me.gameState = 'Continue';

            me.getState = function(){
                return me.gameState;
            };

            me.setState = function(newGameState){
                me.gameState = newGameState;
            };
        }]);
})();