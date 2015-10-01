(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .controller('Game', ['$scope', '$state', '$interval', 'GameServerProxy', 'PlayerType', 'GameStatus',
            function($scope, $state, $interval, proxy, playerType, game){
            $scope.pageHeading = "Kittens Vs Puppies! Fighto!";
            $scope.turn = 1;
            console.log('Game Controller Loaded');

            $scope.showGame = false;
            var me = this;

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
                    console.log('Box:  '+box+'||| Turn: '+$scope.turn);
                    proxy.APICall('makemove', {'playerNumber':$scope.turn, 'chosenSquare':box})
                        .then(function(response){
                            // Success
                            game.setBoard(response.data.gameboard);
                            game.setState(response.data.outcome);
                            if(game.getState() === 'Draw'){
                                console.log('Draw');
                                alert('Its a draw!');
                            }
                            else if(game.getState() === 'Win'){
                                console.log('Win');
                                alert('Its a win!');
                                $scope.pageHeading = 'Player ' + response.data.winner + 'Wins!';
                            }
                            else {
                            }

                            swapTurn(playerType.getPlayer1().type, playerType.getPlayer2().type);
                        },
                        function(response){
                            // Failure
                            console.log('Make Move Failed: '+ $scope.turn + ' |||||| ' + response.data);
                        });
                }
                else {
                    //console.log("Already Filled");
                }
            };

            var swapTurn = function(player1Type, player2Type){
                if(player1Type === 'human' && player2Type === 'human'){
                    $scope.turn = $scope.turn === 1 ? 2 : 1;
                }
            };


    }]);

})();