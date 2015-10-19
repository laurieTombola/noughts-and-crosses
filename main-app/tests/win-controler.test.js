(function () {
    'use strict';
    describe('win-controller tests', function(){
        var winController, scope, $controller, $interval, sandbox, stateSpy;
        beforeEach(function(){
            module('Tombola.Games.NoughtsAndCrosses.Win',
                function($provide){
                    $provide.value("$state", mocks.$state);
            });
            sandbox = sinon.sandbox.create();
            inject(function($injector){
                $controller = $injector.get('$controller');
                scope = $injector.get('$rootScope');
                winController = $controller('Win', {$scope: scope});
                $interval = $injector.get('$interval');
            });
        });
        it('loop should add "e"s to the variable e', function(){
            mocks.$state.$current = 'win';
            scope.$broadcast('$viewContentLoaded');
            $interval.flush(101);
            scope.e.should.equal('e');
        });
    });
})();