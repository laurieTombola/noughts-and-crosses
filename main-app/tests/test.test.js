(function () {
    'use strict';

    describe('GameServerProxy tests', function(){
        var gameServerProxy, $httpBackend, requestHandler;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.API');

            inject(function($injector){
                gameServerProxy = $injector.get('GameServerProxy');
                // Set up the mock http service responses
                $httpBackend = $injector.get('$httpBackend');
                // backend definition common for all tests
                requestHandler = $httpBackend.when('POST', 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove')
                    .respond(function(){
                        return [200, {board:'000000000'}];
                    });
            });
        });

        it('should call the success callback', function(){
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove');
            gameServerProxy.APICall('makemove', {'player1':'human', 'player2':'human'}).then(
            function(data){
                data.board.should.equal('000000000');
            });
            $httpBackend.flush();
        });

        it('should call the failed calleback function', function(){
            $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/incorrect-api-call')
                .respond(function(){
                    return [400, {}];
                });
            gameServerProxy.APICall('incorrect-api-call', {'player1':'human', 'player2':'human'}).then(
                function(data){
                    assert.fail('Code should not have been reached. Response: '+data);
                },
                function(response){
                    response.status.should.equal(400);
                });
            $httpBackend.flush();
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();