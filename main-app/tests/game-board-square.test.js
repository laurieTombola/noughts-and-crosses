(function () {
    'use strict';

    describe('Testing the game board square directive', function(){
        var $compile, $rootScope, $scope;
        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Game');

            inject(function(_$compile_, _$rootScope_){
                $compile = _$compile_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
            });
        });

        afterEach(function(){

        });

        it('', function(){
            var directiveElement = '<game-board-square square-number="0"></game-board-square>';

            $rootScope.board = function(){return [1,0,0,0,0,0,0,0,0]};
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var subElement = element.find('div');
            subElement.attr('class').should.equal('image1');
            subElement.attr('ng-click').should.equal('clickBox(0)');
        });
    });
})();