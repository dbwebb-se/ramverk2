const m = require("mithril");

const game = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
    winner: null,

    calculateWinner: function (squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    },

    handleClick: function(square) {
        var history = game.history.slice(0, game.stepNumber + 1);
        var current = history[history.length - 1];
        var squares = current.squares.slice();

        game.winner = game.calculateWinner(squares);
        if (game.winner || squares[square]) {
            m.redraw();
            return;
        }

        squares[square] = game.xIsNext ? 'X' : 'O';
        game.history = history.concat([{
            squares: squares,
        }]);
        game.stepNumber = history.length;
        game.xIsNext = !game.xIsNext;

        m.redraw();
    },

    jumpTo: function(step) {
        game.stepNumber = step;
        game.xIsNext = (step % 2) === 0;

        m.redraw();
    }
};

module.exports = game;
