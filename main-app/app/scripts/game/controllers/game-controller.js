(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .controller('Game', ['$scope', '$state', '$interval', 'GameServerProxy', 'PlayerType', 'GameStatus', function($scope, $state, $interval, proxy, playerType, game){
            var me = this;
            $scope.pageHeading = "Kittens Vs Puppies! Fighto!";
            $scope.turn = 1;
            me.turnDelayPromise = null;
            $scope.showGame = false;

            var intialiseTurn = function(){
                if(playerType.getPlayer1().type !== 'human' && playerType.getPlayer2().type === 'human'){
                    $scope.turn = 2;
                }
                else {
                    $scope.turn = 1;
                }
            };
            intialiseTurn();

            $scope.board = function (){
                return game.getBoard();
            };

            $scope.clickBox = function(box){
                if(game.getBoard()[parseInt(box)] === '0' && game.getState() === 'Continue'){
                    proxy.APICall('makemove', {'playerNumber':$scope.turn, 'chosenSquare':box})
                        .then(function(response){
                            // Success
                            if(playerType.isHumanVsComputer()){
                                game.setBoard(setCharAt(game.getBoard(), box, $scope.turn));
                                $scope.turn = $scope.turn === 1 ? 2 : 1;
                                me.turnDelayPromise = $interval(function(){game.setBoard(response.data.gameboard);$scope.turn = $scope.turn === 1 ? 2 : 1;}, 2000, 1);
                            }
                            else{
                                game.setBoard(response.data.gameboard);
                            }
                            game.setState(response.data.outcome);
                            if(game.getState() === 'Draw'){
                                $scope.pageHeading = 'Nobody Won :(';
                                $interval(function(){
                                    $state.go('draw');
                                }, 6000, 1);
                            }
                            else if(game.getState() === 'Win'){
                                $scope.pageHeading = 'Player ' + response.data.winner + 'Wins!';
                                $interval(function(){
                                    $state.go('win');
                                }, 6000, 1);
                            }
                            else {
                            }

                            game.swapTurn(playerType.getPlayer1().type, playerType.getPlayer2().type);
                        },
                        function(response){
                            // Failure
                            console.log('Make Move Failed: turn '+ $scope.turn + ' |||||| ' + response.data);
                        });
                }
            };

            function setCharAt(str,index,chr) {
                if(index > str.length-1) return str;
                return str.substr(0,index) + chr + str.substr(index+1);
            }
    }]);
})();