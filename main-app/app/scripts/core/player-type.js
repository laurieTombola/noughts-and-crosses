(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.PlayerType')
        .service('PlayerType', [function(){
            var me = this;
            me.player1 = {
                type:'human',
                alt:'human player icon'
            };

            me.player2 = {
                type:'human',
                alt:'human player icon'
            };

            me.getPlayer1 = function(){
                return me.player1;
            };
            me.getPlayer2 = function(){
                return me.player2;
            };
            me.setPlayer1 = function(value){
                me.player1 = value;
            };
            me.setPlayer2 = function(value){
                me.player2 = value;
            };

            $scope.changePlayerType = function(playerNumber){
                var player = playerType['getPlayer' + playerNumber]();
                player.type = nextType(player.type);
                playerType['setPlayer' + playerNumber](player);
            };

            var nextType = function(playerType){
                if(playerType === 'human'){
                    return 'random';
                }
                else if(playerType === 'random'){
                    return 'pre-trained';
                }
                else{ // player 1 type is pre-trained
                    return 'human';
                }
            };

            var validatePlayerType = function(playerType){
                if(playerType === 'human' || playerType === 'random' || playerType === 'pre-trained'){
                    return true;
                }
                else {
                    return false;
                }
            };
        }]);
})();