(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.Game')
        .service('MakeMove',['$q', '$http', function($q, $http){
            var me = this;
            me.makeMove = function(player, move){
                var defered = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', {'playerNumber':player, 'chosenSquare':move}, {'withCredentials': 'true'})
                    .then(function(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        defered.resolve(response);
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