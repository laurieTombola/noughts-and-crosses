(function () {
    'use strict';


    angular.module('Tombola.Games.NoughtsAndCrosses')
        .controller("bla", ['$scope','GameServerProxy',function($scope, proxy) {
            $scope.pageHeading = "Kittens Vs Puppies! Fighto!";
            $scope.board ='000000000';
            $scope.turn = 1;
            $scope.squareNumber = 0;
            $scope.player1 = {
                type:'human',
                alt:'human player icon'
            };
            $scope.player2 = {
                type:'human',
                alt:'human player icon'
            };

            $scope.showGame = false;
            var me = this;
            me.gameState = 'Continue';

            $scope.clickBox = function(box){
                if($scope.board[parseInt(box)] === '0' && me.gameState === 'Continue'){
                    proxy.makeMove($scope.turn, box)
                        .then(function(response){
                            // Success
                            $scope.board = response.data.gameboard;
                            me.gameState = response.data.outcome;
                            if(me.gameState === 'Draw'){
                                alert('Its a draw!');
                            }
                            me.gameState = response.data.outcome;
                            swapTurn($scope.player1.type, $scope.player2.type);
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

            var intialiseTurn = function(player1Type, player2Type){
                if(player1Type !== 'human' && player2Type === 'human'){
                    $scope.turn = 2;
                }
                else {
                    $scope.turn = 1;
                }
            };
    }]);
})();