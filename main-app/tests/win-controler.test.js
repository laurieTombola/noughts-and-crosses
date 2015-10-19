(function () {
    'use strict';
    describe('win-controller tests', function(){
        var winController, scope, $controller, $interval;
        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Win',
                function($provide){
                    $provide.value("$state", mocks.$state);
            });
            inject(function($injector){
                $controller = $injector.get('$controller');
                scope = $injector.get('$rootScope');
                winController = $controller('Win', {$scope: scope});
                $interval = $injector.get('$interval');
            });
        });
        it('loop should add an "e" to the variable e', function(){
            mocks.$state.$current = 'win';
            scope.$broadcast('$viewContentLoaded');
            $interval.flush(101);
            scope.e.should.equal('e');
            scope.e.length.should.equal(1);
        });
        it('loop should add 5 "e"s to the variable e', function(){
            mocks.$state.$current = 'win';
            scope.$broadcast('$viewContentLoaded');
            $interval.flush(500);
            scope.e.should.equal('eeeee');
            scope.e.length.should.equal(5);
        });
        it('loop should add 10 "e"s to the variable e then remove 3 "e"s from it', function(){
            mocks.$state.$current = 'win';
            scope.$broadcast('$viewContentLoaded');
            $interval.flush(1000);
            $interval.flush(300);
            scope.e.should.equal('eeeeeee');
            scope.e.length.should.equal(7);
        });
        it('should return from the statement',function(){
            mocks.$state.$current = 'lobby';
            scope.$broadcast('$viewContentLoaded');
            $interval.flush(100);
            scope.e.should.equal('');
            scope.e.length.should.equal(0);
        });
    });
})();