(function () {
    'use strict';

    describe('player options tests', function(){
        var $compile, $rootScope, $scope;

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
            var directiveElement = '<player-options></player-options>';

            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest();

            var children = element.children();
            children.attr('class').should.equal('image1');
            children.attr('ng-click').should.equal('clickBox(0)');
        });
    });
})();