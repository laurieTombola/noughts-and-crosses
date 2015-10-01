(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.API', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.PlayerType', []);

    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby',
        ['Tombola.Games.NoughtsAndCrosses.API']);

    angular.module('Tombola.Games.NoughtsAndCrosses.Game',
        ['Tombola.Games.NoughtsAndCrosses.PlayerType',
            'Tombola.Games.NoughtsAndCrosses.API']);

    angular.module('Tombola.Games.NoughtsAndCrosses',
        ['ui.router',
            'Tombola.Games.NoughtsAndCrosses.Lobby',
            'Tombola.Games.NoughtsAndCrosses.Game'])

        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/lobby');

            $stateProvider
                .state('lobby', {
                    url:'/lobby',
                    templateUrl: 'html/lobby-state.html'
                })
                .state('game',{
                    url:'/game',
                    templateUrl: 'html/game-state.html'
                });
        });


})();