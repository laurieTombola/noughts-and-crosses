(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('game-server-proxy',['$http', function($http){
            var me = this;
            me.newGame = function(player1Type, player2Type){
                $http.withCredentials = true;

                $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame", {'player1':player1Type, 'player2':player2Type}).
                    then(function(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        me.response = response;
                        console.log('success new game: '+response.data.outcome);
                    }, function(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.log('failure new game: '+response);
                    });
            };

            me.makeMove = function(player, move, successCallback, failureCallback){
                $http.withCredentials = true;
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', {'playerNumber':player, 'chosenSquare':move}).
                    then(function(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        successCallback(response);
                        console.log('success: '+response);
                        me.response = response;
                        return response;
                    }, function(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        failureCallback(response);
                    });
            };
        }]);
})();