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

            me.changePlayerType = function(playerNumber){
                me['player' + playerNumber].type = nextType(me['player' + playerNumber].type);
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

            me.validatePlayerType = function(number){
                console.log(me['player'+number].type);
                if(me['player'+number].type === 'human' || me['player'+number].type === 'random' || me['player'+number].type === 'pre-trained'){
                    return true;
                }
                else {
                    return false;
                }
            };

            me.isHumanVsComputer = function(){
                return (me.player1.type !== 'human' || me.player2.type !== 'human');
            };

        }]);
})();