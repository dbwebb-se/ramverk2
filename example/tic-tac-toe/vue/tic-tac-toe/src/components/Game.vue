<template>
  <div class="game">
    <Board :onClick="handleClick" :squares="getCurrent()" />
    <GameInfo :status="getNext()" :moves="getMoves()" :onJump="jumpTo" />
  </div>
</template>

<script>
import Board from './Board.vue'
import GameInfo from './GameInfo.vue'

export default {
  name: 'Game',
  components: {
    Board,
    GameInfo,
  },
  data() {
    return {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  },
  methods: {
    handleClick(i) {
      const history = this.history.slice(0, this.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
          return;
      }
      squares[i] = this.xIsNext ? 'X' : 'O';

      this.history = history.concat([{
        squares: squares,
      }]);

      this.stepNumber = history.length;
      this.xIsNext = !this.xIsNext;
    },
    getCurrent() {
      return this.history[this.stepNumber].squares
    },
    getNext() {
      const history = this.history.slice(0, this.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares)) {
        return (!this.xIsNext ? 'X' : 'O') + " won the game!";
      }

      return "Next player: " + (this.xIsNext ? 'X' : 'O');
    },
    getMoves() {
        return this.history.map((step, move) => {
            return move ?
            'Go to move #' + move :
            'Go to game start';
        });
    },
    jumpTo(step) {
        this.stepNumber = step;
        this.xIsNext = (step % 2) === 0;
    }
  }
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Arial", "Helvetica", sans-serif;
}
</style>
