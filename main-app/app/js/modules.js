(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/lobby');

            $stateProvider
                .state('lobby', {
                    url:'/lobby',
                    templateUrl: 'partials/lobby-state.html'
                })
                .state('game',{
                    url:'/game',
                    templateUrl: 'partials/game-state.html'
                });
        });

})();