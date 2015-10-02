(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby')
        .controller("Lobby", ['$scope', '$state', 'GameServerProxy', 'PlayerType', 'GameStatus',
            function($scope, $state, proxy, playerType, game) {

            $scope.player1 = function(){
                return playerType.getPlayer1();
            };

            $scope.player2 = function(){
                    return playerType.getPlayer2();
                };

            $scope.showTheGame = function(){
                if(validatePlayerType(playerType.getPlayer1().type) && validatePlayerType(playerType.getPlayer2().type) ){
                    proxy.APICall('newgame', {'player1':playerType.getPlayer1().type, 'player2':playerType.getPlayer2().type})
                        .then(function(response){
                            console.log('New Game Created: ' + response.data.outcome);
                            game.setBoard(response.data.gameboard);
                            game.setState(response.data.outcome);
                            $state.go('game');
                        },
                        function(errorMessage){
                            console.log('Error: ' + errorMessage);
                        });
                }
                else {
                    console.log('Invalid Player Type: ' + $scope.player1.type + ' ' + $scope.player2.type);
                }
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