import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  history = [{
    squares: Array(9).fill(null),
  }];
  stepNumber = 0;
  xIsNext = true;

  constructor() { }

  ngOnInit() {
  }

  handleClick(i) {
    const history = this.history.slice(0, this.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
        return;
    }
    squares[i] = this.xIsNext ? 'X' : 'O';

    this.history = history.concat([{
      squares: squares,
    }]);

    this.stepNumber = history.length;
    this.xIsNext = !this.xIsNext;
  }

  getCurrent() {
    return this.history[this.stepNumber].squares
  }

  getNext() {
    return this.xIsNext ? 'X' : 'O';
  }

  getMoves() {
      return this.history.map((step, move) => {
          return move ?
          'Go to move #' + move :
          'Go to game start';
      });
  }
  
  jumpTo(step) {
      this.stepNumber = step;
      this.xIsNext = (step % 2) === 0;
  }

  calculateWinner(squares) {
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
}
