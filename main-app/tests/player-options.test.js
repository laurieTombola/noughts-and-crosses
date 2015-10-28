(function () {
    'use strict';

    describe('player options tests', function(){
        var $compile, $rootScope, $scope;

        beforeEach(module('Tombola.Games.NoughtsAndCrosses'));

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Lobby');

            inject(function(_$compile_, _$rootScope_){
                $compile = _$compile_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
            });
        });

        afterEach(function(){

        });

        it('should correctly insert the player options', function(){
            $scope.player1 = function(){
                return {type:'human'}
            };
            $scope.player2 = $scope.player1;
            var element = $compile('<player-options></player-options>')($scope);
            $scope.$digest();
            element[0].children[0].className.should.equal('playerTypehuman');
            element[0].children[0].getAttribute('ng-click').should.equal('changePlayerType(1)');
        });
    });
})();