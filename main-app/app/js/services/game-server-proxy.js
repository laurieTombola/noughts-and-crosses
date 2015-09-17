(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('GameServerProxy',['$q', '$http', function($q, $http){
            var me = this;
            me.newGame = function(player1Type, player2Type){
                var defered = $q.defer();
                $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame", {'player1':player1Type, 'player2':player2Type}, {'withCredentials': 'true'})
                    .then(function(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        defered.resolve(response.data);
                    }, function(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        defered.reject(response.data);
                    });
                return defered.promise;
            };

            me.makeMove = function(player, move){
                var defered = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', {'playerNumber':player, 'chosenSquare':move}, {'withCredentials': 'true'})
                    .then(function(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        defered.resolve(response);
                        me.response = response;
                        return response;
                    }, function(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        defered.reject(response);
                    });
                return defered.promise;
            };
        }]);
})();