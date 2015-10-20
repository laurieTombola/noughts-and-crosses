(function () {
    'use strict';

    describe('lobby-controller tests', function(){
        var $scope, controller;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Lobby');

            inject(['$rootScope', '$controller', function($rootScope, $controller){
                $scope = $rootScope.$new();
                controller = $controller('Lobby', {
                    $scope:$scope,
                    $state:mocks.$state,
                    GameServerProxy:mocks.GameServerProxy,
                    PlayerType:mocks.PlayerType,
                    GameStatus:mocks.GameStatus
                })
            }]);
        });

        afterEach(function(){

        });

        it('some text', function(){

        });
    });
})();