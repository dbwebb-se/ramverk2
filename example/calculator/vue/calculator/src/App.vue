<template>
    <div id="app">
        <Calculator />
    </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
    name: 'app',
    components: {
        Calculator
    }
}
</script>

<style>
#app {
    font-family: "Helvetica", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    margin-top: 60px;
    font-size: 2em;
}
</style>
