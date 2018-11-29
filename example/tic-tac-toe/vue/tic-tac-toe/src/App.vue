<template>
  <div id="app" class="App">
    <h1>tic-tac-toe</h1>
    <Game />
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sigmar+One');

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

.App {
    width: 64rem;
    box-sizing: border-box;
    padding: 8rem;
    text-align: center;
    background-color: #ddd;
}

h1 {
    font-size: 4em;
    font-family: 'Sigmar One', cursive;
    font-weight: normal;
}
</style>
