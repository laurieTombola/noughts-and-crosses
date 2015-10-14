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
                    if(playerType.validatePlayerType(1) && playerType.validatePlayerType(2) ){
                        proxy.APICall('newgame', {'player1':playerType.getPlayer1().type, 'player2':playerType.getPlayer2().type})
                            .then(function(data){
                                game.setBoard(data.gameboard);
                                game.setState(data.outcome);
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

                $scope.changePlayerType = function(playerNumber) {
                    playerType.changePlayerType(playerNumber);
                };
        }]);
})();