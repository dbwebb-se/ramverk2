<template>
    <div class="game-board">
        <div class="board-row">
            <Square :onClick="onClick" :index="0" :current="squares[0]" />
            <Square :onClick="onClick" :index="1" :current="squares[1]" />
            <Square :onClick="onClick" :index="2" :current="squares[2]" />
        </div>
        <div class="board-row">
            <Square :onClick="onClick" :index="3" :current="squares[3]" />
            <Square :onClick="onClick" :index="4" :current="squares[4]" />
            <Square :onClick="onClick" :index="5" :current="squares[5]" />
        </div>
        <div class="board-row">
            <Square :onClick="onClick" :index="6" :current="squares[6]" />
            <Square :onClick="onClick" :index="7" :current="squares[7]" />
            <Square :onClick="onClick" :index="8" :current="squares[8]" />
        </div>
    </div>
</template>

<script>
import Square from './Square.vue'

export default {
  name: 'Board',
  components: {
    Square
  },
  props: {
    onClick: Function,
    squares: Array,
  }
}
</script>

<style scoped>
.board-row::after {
    content: "";
    display: block;
    clear: both;
}
</style>
