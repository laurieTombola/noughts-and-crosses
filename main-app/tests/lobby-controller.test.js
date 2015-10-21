(function () {
    'use strict';

    describe('lobby-controller tests', function(){
        var $scope, $rootScope, controller, mySpy, mySpy2, mySpy3, $q, sandbox;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Lobby');

            inject(['$rootScope', '$controller', '$q', function(_$rootScope_, $controller, _$q_){
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $q = _$q_;
                sandbox = sinon.sandbox.create();
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
            sandbox.restore();
        });

        it('should call playerType.getPlayer1', function(){
            mySpy = sandbox.spy(mocks.PlayerType, 'getPlayer1');
            $scope.player1();
            mySpy.should.have.been.calledOnce;
        });

        it('should call playerType.getPlayer2', function(){
            mySpy = sinon.sandbox.spy(mocks.PlayerType, 'getPlayer2');
            $scope.player2();
            mySpy.should.have.been.calledOnce;
        });

        it('showTheGame should safely launch the game', function(){
            var deferred = $q.defer();
            mySpy = sandbox.stub(mocks.PlayerType, 'validatePlayerType', function(){return true;});
            mySpy2 = sandbox.spy(mocks.$state, 'go');
            sandbox.stub(mocks.PlayerType, 'getPlayer1', function(){return {type:'human'};});
            sandbox.stub(mocks.PlayerType, 'getPlayer2', function(){return {type:'human'};});
            sandbox.stub(mocks.GameServerProxy, 'APICall', function(){return deferred.promise;});

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

        it('should call PlayerType.ChangePlayerType', function(){
            mySpy = sandbox.spy(mocks.PlayerType, 'changePlayerType');
            var playerNumber = 1;
            $scope.changePlayerType(playerNumber);
            mySpy.should.have.been.calledOnce.calledWithExactly(playerNumber);
        });
    });
})();