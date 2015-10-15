(function () {
    'use strict';
    describe('game-status test', function(){
        var game;

        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses');

            inject(function($injector){
                game = $injector.get('GameStatus');
            });
        });


        // GAME BOARD TESTS
        it('should return the current value of the board', function(){
            game.getBoard().should.be.a('string');
            game.getBoard().should.have.length(9);
        });

        it('should set the value of the board', function(){
            game.setBoard('123123123');
            game.getBoard().should.be.a('string');
            game.getBoard().should.have.length(9);
            game.getBoard().should.equal('123123123');
        });

        //GAME STATE TESTS
        it('should return the current value of the gameState', function(){
            game.getState().should.be.a('string');
            game.getState().should.equal('Continue');
        });

        it('should set the value of the gameState', function(){
            game.setState('Draw');
            game.getState().should.be.a('string');
            game.getState().should.equal('Draw');
        });


        //TURN TESTS
        it('should return the current value of the turn', function(){
            game.getTurn().should.be.a('number');
            game.getTurn().should.equal(1);
        });

        it('should set the value of the turn', function(){
            game.setTurn(2);
            game.getTurn().should.be.a('number');
            game.getTurn().should.equal(2);
        });


        //SWAP TURN TESTS
        it('should swap the turn over', function(){
            game.swapTurn('human', 'human');
            game.getTurn().should.be.a('number');
            game.getTurn().should.equal(2);
        });

        it('should not swap the turn over', function(){
            game.swapTurn('random', 'human');
            game.getTurn().should.be.a('number');
            game.getTurn().should.equal(1);
        });


    });
})();