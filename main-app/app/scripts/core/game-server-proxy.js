(function () {
    'use strict';

    angular.module('Tombola.Games.NoughtsAndCrosses.API')
        .service('GameServerProxy',['$q', '$http', function($q, $http){
            var me = this;

            me.APICall = function(APIName, data){
                var defered = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/'+APIName, data, {'withCredentials': 'true'})
                    .then(function(response) {
                        defered.resolve(response.data);
                        return response;
                    }, function(response) {
                        defered.reject(response);
                    });
                return defered.promise;
            };
        }]);
})();