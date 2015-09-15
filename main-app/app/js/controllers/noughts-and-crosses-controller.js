(function () {
    'use strict';


    angular.module('Tombola.Games.NoughtsAndCrosses')
        .controller("Game", ['$scope','game-server-proxy','$q',function($scope, proxy, $q) {
            $scope.pageHeading = "Kittens Vs Puppies! Fighto!";
            $scope.board ='000000000';
            $scope.turn = 1;
            $scope.player1Type = 'human';
            $scope.player2Type = 'human';
            proxy.newGame($scope.player1Type,$scope.player2Type);

            $scope.clickBox = function(box){
                if($scope.board[box] === '0'){
                    proxy.makeMove($scope.turn, box, function(response){
                        console.log("Success: "+response.data.outcome);
                    },
                    function(response){
                        console.log("Failure: "+response.data);
                    });
                    //console.log($scope.board);
                    //console.log("Set to "+$scope.turn);
                    $scope.swapTurn();
                }
                else {
                    //console.log("Already Filled");
                }
            };

            String.prototype.replaceAt=function(index, character) {
                return this.substr(0, index) + character + this.substr(index+character.length);
            };

            $scope.swapTurn = function(){
                $scope.turn = $scope.turn === 1 ? 2 : 1;
            };
    }]);
})();