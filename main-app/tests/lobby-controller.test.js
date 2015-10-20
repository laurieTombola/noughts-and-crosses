(function () {
    'use strict';

    describe('lobby-controller tests', function(){
        var $scope, $rootScope, controller, mySpy, mySpy2, mySpy3, $q;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Lobby');

            inject(['$rootScope', '$controller', '$q', function(_$rootScope_, $controller, _$q_){
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $q = _$q_;
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
            mySpy.restore();
        });

        it('should call playerType.getPlayer1', function(){
            mySpy = sinon.spy(mocks.PlayerType, 'getPlayer1');
            $scope.player1();
            mySpy.should.have.been.calledOnce;
        });

        it('should call playerType.getPlayer2', function(){
            mySpy = sinon.spy(mocks.PlayerType, 'getPlayer2');
            $scope.player2();
            mySpy.should.have.been.calledOnce;
        });

        it('showTheGame should safely launch the game', function(){
            var deferred = $q.defer();
            mySpy = sinon.stub(mocks.PlayerType, 'validatePlayerType', function(){return true;});
            mySpy2 = sinon.spy(mocks.$state, 'go');
            sinon.stub(mocks.PlayerType, 'getPlayer1', function(){return {type:'human'};});
            sinon.stub(mocks.PlayerType, 'getPlayer2', function(){return {type:'human'};});
            sinon.stub(mocks.GameServerProxy, 'APICall', function(){return deferred.promise;});

            $scope.showTheGame();

            deferred.resolve({
                    data:{
                        gameboard:'000000000',
                        outcome:'continue'
            }});
            $rootScope.$digest();
            mySpy.should.have.been.calledTwice;
            mySpy2.should.have.been.calledOnce.calledWithExactly('game');
        });
    });
})();