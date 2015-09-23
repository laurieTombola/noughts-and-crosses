(function () {
    'use strict';


    angular.module('Tombola.Games.NoughtsAndCrosses')
        .controller("Game", ['$scope','GameServerProxy',function($scope, proxy) {
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

            $scope.showTheGame = function(){
                if(validatePlayerType($scope.player1.type) && validatePlayerType($scope.player2.type) ){
                    intialiseTurn($scope.player1.type, $scope.player2.type);
                    proxy.newGame($scope.player1.type,$scope.player2.type)
                        .then(function(data){
                            console.log('New Game Created: ' + data.outcome);
                            $scope.showGame = true;
                            $scope.board = data.gameboard;
                            $scope.gameState = data.outcome;
                        },
                        function(errorMessage){
                            console.log('Error: ' + errorMessage);
                        });
                }
                else {
                    console.log('Invalid Player Type: ' + $scope.player1.type + ' ' + $scope.player2.type);
                }
            };

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

            String.prototype.replaceAt=function(index, character) {
                return this.substr(0, index) + character + this.substr(index+character.length);
            };

            var swapTurn = function(player1Type, player2Type){
                if(player1Type === 'human' && player2Type === 'human'){
                    $scope.turn = $scope.turn === 1 ? 2 : 1;
                }
            };

            $scope.changePlayerType = function(playerNumber){
                $scope['player' + playerNumber].type = nextType($scope['player' + playerNumber].type);
                $scope['player' + playerNumber].alt = $scope['player' + playerNumber].type + " player icon";
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