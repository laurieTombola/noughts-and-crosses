(function () {
    'use strict';

    describe('lobby-controller tests', function(){
        var $scope, $rootScope, controller, getPlayerSpy, validatePlayerStub, changePlayerTypeSpy, goSpy, $q, sandbox;

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
            getPlayerSpy = sandbox.spy(mocks.PlayerType, 'getPlayer1');
            $scope.player1();
            getPlayerSpy.should.have.been.calledOnce;
        });

        it('should call playerType.getPlayer2', function(){
            getPlayerSpy = sinon.sandbox.spy(mocks.PlayerType, 'getPlayer2');
            $scope.player2();
            getPlayerSpy.should.have.been.calledOnce;
        });

        it('showTheGame should safely launch the game', function(){
            var deferred = $q.defer();
            validatePlayerStub = sandbox.stub(mocks.PlayerType, 'validatePlayerType', function(){return true;});
            goSpy = sandbox.spy(mocks.$state, 'go');
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
            validatePlayerStub.should.have.been.calledTwice;
            goSpy.should.have.been.calledOnce.calledWithExactly('game');
        });

        it('should call PlayerType.ChangePlayerType', function(){
            changePlayerTypeSpy = sandbox.spy(mocks.PlayerType, 'changePlayerType');
            var playerNumber = 1;
            $scope.changePlayerType(playerNumber);
            changePlayerTypeSpy.should.have.been.calledOnce.calledWithExactly(playerNumber);
        });
    });
})();