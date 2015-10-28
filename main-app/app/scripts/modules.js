(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses.API', []);
    angular.module('Tombola.Games.NoughtsAndCrosses.PlayerType', []);

    angular.module('Tombola.Games.NoughtsAndCrosses.Win',[]);

    angular.module('Tombola.Games.NoughtsAndCrosses.Navbar',[]);

    angular.module('Tombola.Games.NoughtsAndCrosses.Lobby',
        ['Tombola.Games.NoughtsAndCrosses.API']);

    angular.module('Tombola.Games.NoughtsAndCrosses.Game',
        ['Tombola.Games.NoughtsAndCrosses.PlayerType',
            'Tombola.Games.NoughtsAndCrosses.API']);

    angular.module('Tombola.Games.NoughtsAndCrosses',
        ['ui.router',
            'Tombola.Games.NoughtsAndCrosses.Lobby',
            'Tombola.Games.NoughtsAndCrosses.Game',
            'Tombola.Games.NoughtsAndCrosses.Win'])

        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/lobby');

            $stateProvider
                .state('lobby', {
                    url:'/lobby',
                    templateProvider:function ($templateCache){ return $templateCache.get("html/lobby-state.html");}
                })
                .state('game',{
                    url:'/game',
                    templateProvider:function ($templateCache){ return $templateCache.get("html/game-state.html");}
                })
                .state('win',{
                    url:'/win',
                    templateProvider:function ($templateCache){ return $templateCache.get("html/win-state.html");},
                    controller: 'Win'
                })
                .state('draw',{
                    url:'/draw',
                    templateProvider:function ($templateCache){ return $templateCache.get("html/draw-state.html");}
                });
        });
})();