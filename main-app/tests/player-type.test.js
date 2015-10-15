(function () {
    'use strict';
    describe('player-type tests', function(){

        var playerType;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.PlayerType');

            inject(function($injector){
                playerType = $injector.get('PlayerType');
            });
        });

        // Player1 Tests
        it('should return the current value of player1', function(){
            playerType.getPlayer1().should.be.a('object');
            playerType.getPlayer1().type.should.be.a('string');
        });

        it('should set the current value of player1', function(){
            playerType.setPlayer1({type:'random', alt:'something'});
            playerType.getPlayer1().should.be.deep.equal({type:'random', alt:'something'});
        });

        // Player2 Tests
        it('should return the current value of player2', function(){
            playerType.getPlayer2().should.be.a('object');
            playerType.getPlayer2().type.should.be.a('string');
        });

        it('should set the current value of player2', function(){
            playerType.setPlayer2({type:'random', alt:'something'});
            playerType.getPlayer2().should.be.deep.equal({type:'random', alt:'something'});
        });

        // Functionality Tests
        it('changePlayerType should change the type of the indicated player', function(){
            playerType.changePlayerType(1);
            playerType.getPlayer1().type.should.equal('random');
            playerType.changePlayerType(2);
            playerType.getPlayer2().type.should.equal('random');

            playerType.changePlayerType(1);
            playerType.getPlayer1().type.should.equal('pre-trained');
            playerType.changePlayerType(2);
            playerType.getPlayer2().type.should.equal('pre-trained');

            playerType.changePlayerType(1);
            playerType.getPlayer1().type.should.equal('human');
            playerType.changePlayerType(2);
            playerType.getPlayer2().type.should.equal('human');
        });

        it('validatePlayerType should return true', function(){
            playerType.setPlayer1({type:'human', alt:'bla'});
            playerType.validatePlayerType(1).should.equal(true);
            playerType.setPlayer1({type:'random', alt:'bla'});
            playerType.validatePlayerType(1).should.equal(true);
            playerType.setPlayer1({type:'pre-trained', alt:'bla'});
            playerType.validatePlayerType(1).should.equal(true);
        });

        it('validatePlayerType should return false', function(){
            playerType.setPlayer1({type:'Human', alt:'bla'});
            playerType.validatePlayerType(1).should.equal(false);
            playerType.setPlayer1({type:'rnd', alt:'bla'});
            playerType.validatePlayerType(1).should.equal(false);
            playerType.setPlayer1({type:'pretrained', alt:'bla'});
            playerType.validatePlayerType(1).should.equal(false);
        });

        afterEach(function(){

        });
    });

})();