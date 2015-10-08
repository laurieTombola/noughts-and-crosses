(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .service('StartGame',['$q', '$http', function($q, $http) {
            var me = this;
            me.newGame = function (player1Type, player2Type) {
                var defered = $q.defer();
                $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame",
                    {'player1': player1Type, 'player2': player2Type}, {'withCredentials': 'true'})
                    .then(function (response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        defered.resolve(response.data);
                    }, function (response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        defered.reject(response.data);
                    });
                return defered.promise;
            };
        }]);
})();