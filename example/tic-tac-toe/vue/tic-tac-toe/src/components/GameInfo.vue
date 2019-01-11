<template>
    <div class="game-info">
        <div>{{ status }}</div>
        <div class="history-buttons">
            <li v-for="(move, index) in moves" :key="index">
                <button @click="onJump(index)">{{ move }}</button>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameInfo',
    props: {
      status: String,
      moves: Array,
      onJump: Function,
    },
}
</script>

<style scoped>
li {
    list-style-type: none;
}
</style>
