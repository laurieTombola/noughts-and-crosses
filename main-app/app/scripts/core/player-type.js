(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.PlayerType')
        .service('PlayerType', [function(){

            var player1 = {
                type:'human',
                alt:'human player icon'
            };

            var player2 = {
                type:'human',
                alt:'human player icon'
            };

            this.getPlayer1 = function(){
                return player1;
            };
            this.getPlayer2 = function(){
                return player2;
            };
            this.setPlayer1 = function(value){
                player1 = value;
            };
            this.setPlayer2 = function(value){
                player2 = value;
            };
        }]);
})();