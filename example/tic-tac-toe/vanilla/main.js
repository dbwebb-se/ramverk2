(function () {
    let state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
    };

    let root = document.getElementById('root');
    let app = document.createElement("App");
    let title = document.createElement("h1");
    let game = document.createElement("div");
    let gameBoard = document.createElement("div");
    let gameInfo = document.createElement("div");
    let nextPlayer = document.createElement("div");
    let historyButtons = document.createElement("div");

    app.className = "App";
    title.textContent = "tic-tac-toe";
    game.className = "game";
    gameBoard.className = "game-board";
    gameInfo.className = "game-info";

    for (let i = 0; i < 3; i++) {
        let boardRow = document.createElement("div");

        boardRow.className = "board-row";

        for (let j = 0; j < 3; j++) {
            let square = document.createElement("div");

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
        const htmlSquares = document.getElementsByClassName("square");
        const squares = state.history[state.stepNumber].squares;

        squares.map((item, index) => {
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
        const history = state.history;
        const current = history[state.stepNumber];

        while (historyButtons.lastChild) {
            historyButtons.removeChild(historyButtons.lastChild);
        }

        const moves = history.map((step, move) => {
            const desc = move ?
            'Go to move #' + move :
            'Go to game start';

            let button = document.createElement("button");

            button.textContent = desc;
            button.addEventListener("click", () => jumpTo(move));

            historyButtons.appendChild(button);
        });
    }

    function handleClick() {
        const square = this.dataset.index;
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[square]) {
            renderNextPlayer();
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
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    renderNextPlayer();
    renderHistoryButtons();
})();
