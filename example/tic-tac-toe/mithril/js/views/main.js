var m = require("mithril");
var game = require("../models/game.js");

var squareIndex = 0;

var squareComponent = {
    view: function() {
        var index = squareIndex++;

        return m("div.square",
            {
                onclick: function () {
                    game.handleClick(index);
                }
            },
            game.history[game.stepNumber].squares[index]
        );
    }
};

var boardRowComponent = {
    view: function() {
        return m("div.board-row", [
            m(squareComponent),
            m(squareComponent),
            m(squareComponent),
        ]);
    }
};

var boardComponent = {
    view: function() {
        return m("div.game-board", [
            m(boardRowComponent),
            m(boardRowComponent),
            m(boardRowComponent),
        ]);
    }
};

var historyButtonsComponent = {
    view: function () {
        var history = game.history;

        return m("div.history-buttons", history.map(function(step, move) {
            var desc = move ?
                'Go to move #' + move :
                'Go to game start';

            return m("button",
                {
                    onclick: function() {
                        game.jumpTo(move);
                    }
                },
                desc
            );
        }));
    }
};

var nextPlayerComponent = {
    view: function() {
        if (game.winner) {
            return m("div", "Winner: " + game.winner);
        }

        return m("div", 'Next player: ' + (game.xIsNext ? 'X' : 'O'));
    }
};

var gameInfoComponent = {
    view: function() {
        return m("div.game-info", [
            m(nextPlayerComponent),
            m(historyButtonsComponent)
        ]);
    }
};

module.exports = {
    view: function () {
        squareIndex = 0;
        return m("div#root", [
            m("div.App", [
                m("h1", "tic-tac-toe"),
                m("div.game", [
                    m(boardComponent),
                    m(gameInfoComponent)
                ])
            ])
        ]);
    }
};
