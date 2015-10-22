var mocks;
(function () {
    'use strict';
    mocks = {
        $state: {
            $current: 'lobby',
            go: function(state){}
        },
        GameServerProxy: {
            APICall:function(){}
        },
        PlayerType: {
            getPlayer1:function(){},
            getPlayer2:function(){},
            setPlayer1:function(){},
            setPlayer2:function(){},
            changePlayerType:function(){},
            validatePlayerType:function(){},
            isHumanVsComputer:function(){}
        },
        GameStatus: {
            getBoard:function(){},
            setBoard:function(){},
            getState:function(){},
            setState:function(){},
            getTurn:function(){},
            setTurn:function(){},
            swapTurn:function(){}
        }
    };
})();