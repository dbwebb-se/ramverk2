(function () {
    var state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
    };

    var root = document.getElementById('root');
    var app = document.createElement("App");
    var title = document.createElement("h1");
    var game = document.createElement("div");
    var gameBoard = document.createElement("div");
    var gameInfo = document.createElement("div");
    var nextPlayer = document.createElement("div");
    var historyButtons = document.createElement("div");

    app.className = "App";
    title.textContent = "tic-tac-toe";
    game.className = "game";
    gameBoard.className = "game-board";
    gameInfo.className = "game-info";
    historyButtons.className = "history-buttons";

    for (var i = 0; i < 3; i++) {
        var boardRow = document.createElement("div");

        boardRow.className = "board-row";

        for (var j = 0; j < 3; j++) {
            var square = document.createElement("div");

            square.className = "square";
            square.dataset.index = i * 3 + j;
            square.addEventListener("click", handleClick);
            boardRow.appendChild(square);
        }

        gameBoard.appendChild(boardRow);
    }

    game.appendChild(gameBoard);
    gameInfo.appendChild(nextPlayer);
    gameInfo.appendChild(historyButtons);
    game.appendChild(gameInfo);
    app.appendChild(title);
    app.appendChild(game);
    root.appendChild(app);

    function renderBoard() {
        var htmlSquares = document.getElementsByClassName("square");
        var squares = state.history[state.stepNumber].squares;

        squares.map(function(item, index) {
            htmlSquares[index].textContent = item;
        });
    }

    function renderNextPlayer(winner) {
        nextPlayer.textContent = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
        if (winner) {
            nextPlayer.textContent = "Winner: " + winner;
        }
    }

    function renderHistoryButtons() {
        var history = state.history;

        while (historyButtons.lastChild) {
            historyButtons.removeChild(historyButtons.lastChild);
        }

        history.map(function(step, move) {
            var desc = move ?
                'Go to move #' + move :
                'Go to game start';
            var button = document.createElement("button");

            button.textContent = desc;
            button.addEventListener("click", function() {
                jumpTo(move);
            });

            historyButtons.appendChild(button);
        });
    }

    function jumpTo(step) {
        state.stepNumber = step;
        state.xIsNext = (step % 2) === 0;

        var history = state.history.slice(0, state.stepNumber + 1);
        var current = history[history.length - 1];
        var squares = current.squares.slice();

        renderBoard();
        renderNextPlayer(calculateWinner(squares));
        renderHistoryButtons();
    }

    function handleClick() {
        var square = this.dataset.index;
        var history = state.history.slice(0, state.stepNumber + 1);
        var current = history[history.length - 1];
        var squares = current.squares.slice();

        if (calculateWinner(squares) || squares[square]) {
            renderNextPlayer(calculateWinner(squares));
            return;
        }

        squares[square] = state.xIsNext ? 'X' : 'O';
        state = {
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext,
        };

        renderBoard();
        renderNextPlayer(calculateWinner(squares));
        renderHistoryButtons();
    }

    function calculateWinner(squares) {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (var i = 0; i < lines.length; i++) {
            var a = lines[i][0];
            var b = lines[i][1];
            var c = lines[i][2];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    renderNextPlayer();
    renderHistoryButtons();
})();
