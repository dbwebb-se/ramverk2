<template>
    <div class="game-info">
        <div>Next player: {{ status }}</div>
        <div class="history-buttons">{{ moves }}</div>
    </div>
</template>

<script>
export default {
    name: 'GameInfo',
    props: {
      status: String,
      moves: Array
    },
}
</script>
