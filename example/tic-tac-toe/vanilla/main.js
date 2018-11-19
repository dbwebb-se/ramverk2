(function () {
    let state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
    };

    state.history[0].squares[2] = "X";

    let root = document.getElementById('root');

    let app = document.createElement("App");
    app.className = "App";

    let title = document.createElement("h1");
    title.textContent = "tic-tac-toe";

    let game = document.createElement("div");
    game.className = "game";

    let gameBoard = document.createElement("div");
    gameBoard.className = "game-board";

    let gameInfo = document.createElement("div");
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
    game.appendChild(gameInfo);
    app.appendChild(title);
    app.appendChild(game);
    root.appendChild(app);

    function renderBoard() {
        let htmlSquares = document.getElementsByClassName("square");
        let squares = state.history[state.stepNumber].squares;
        squares.map((item, index) => {
            htmlSquares[index].textContent = item;
        });
    }

    function handleClick(event) {
        console.log(this);
        console.log(event);
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

    renderBoard();
})();
