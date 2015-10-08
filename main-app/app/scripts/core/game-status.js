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

            me.turn = 1;

            me.getTurn = function(){
                return me.turn;
            };

            me.setTurn = function(turn){
                me.turn = turn;
            };

            me.swapTurn = function(player1Type, player2Type){
                if(player1Type === 'human' && player2Type === 'human'){
                    me.turn = me.turn === 1 ? 2 : 1;
                }
            };
        }]);
})();