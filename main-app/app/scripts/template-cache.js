(function () {
    'use strict';
    angular.module('Tombola.Games.NoughtsAndCrosses')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('html/draw-state.html',
                '<div>'+
                    '<h1>In this case: Everybody was a looser :(</h1>'+
                    '<h1>better luck next time folks</h1>'+
                '</div>'
            );


            $templateCache.put('html/game-board.html',
                '<table>'+
                    '<tr>' +
                        '<td><game-board-square square-number="0"></game-board-square></td>'+
                        '<td><game-board-square square-number="1"></game-board-square></td>'+
                        '<td><game-board-square square-number="2"></game-board-square></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><game-board-square square-number="3"></game-board-square></td>'+
                        '<td><game-board-square square-number="4"></game-board-square></td>'+
                        '<td><game-board-square square-number="5"></game-board-square></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><game-board-square square-number="6"></game-board-square></td>'+
                        '<td><game-board-square square-number="7"></game-board-square></td>'+
                        '<td><game-board-square square-number="8"></game-board-square></td>'+
                    '</tr>'+
                '</table>'
            );
            $templateCache.put('html/game-state.html',
                '<div ng-controller="Game">'+
                    '<div class="siteTitle">'+
                        '<h1>Noughts And Crosses</h1>'+
                        '<h3>By The one and only</h3>'+
                        '<h3>Laurie</h3>'+
                    '</div>'+
                    '<div>'+
                        '<h1>{{pageHeading}}</h1>'+
                        "<h3>Player {{turn}}'s turn</h3>"+
                        '<game-board></game-board>'+
                    '</div>'+
                '</div>'
            );
            $templateCache.put('html/lobby-state.html',
                '<div ng-controller="Lobby">'+
                    '<h1>Noughts & Crosses</h1>'+
                    '<h2>Kittens & Puppies Style</h2>'+
                    '<player-options></player-options>'+
                    '<button ng-click="showTheGame()">Start Game</button>'+
                '</div>'
            );
            $templateCache.put('html/player-options.html',
                '<div class="playerType{{player1().type}}" ng-click="changePlayerType(1)"></div> '+
                '<div class="playerType{{player2().type}}" ng-click="changePlayerType(2)"></div><br>'
            );
            $templateCache.put('html/win-state.html',
                '<div>'+
                '<h1>We{{e}}</h1>'+
                '<h2 ng-show="show1">Have A</h2>'+
                '<h1 ng-show="show1">Winner!</h1>'+
                '</div>'
            );
        }
        ]);

})();