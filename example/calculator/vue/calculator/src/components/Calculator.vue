<template>
    <div class="calculator">
        <div class="display">{{ current || 0 }}</div>
        <div @click="clear" class="btn">C</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="percentage" class="btn">%</div>
        <div @click="divide" class="btn operator">÷</div>
        <div @click="append(7)" class="btn">7</div>
        <div @click="append(8)" class="btn">8</div>
        <div @click="append(9)" class="btn">9</div>
        <div @click="multiply" class="btn operator">x</div>
        <div @click="append(4)" class="btn">4</div>
        <div @click="append(5)" class="btn">5</div>
        <div @click="append(6)" class="btn">6</div>
        <div @click="subtract" class="btn operator">-</div>
        <div @click="append(1)" class="btn">1</div>
        <div @click="append(2)" class="btn">2</div>
        <div @click="append(3)" class="btn">3</div>
        <div @click="add" class="btn operator">+</div>
        <div @click="append(0)" class="btn zero">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="equal" class="btn operator">=</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            decimals: null,
            previous: 0,
            operator: null,
            operatorClicked: false,
        }
    },
    methods: {
        clear() {
            this.current = 0;
        },
        sign() {
            this.current = -this.current;
        },
        percentage() {
            this.current = this.current / 100;
        },
        append(number) {
            if (this.operatorClicked) {
                this.current = 0;
                this.decimals = null;
                this.operatorClicked = false;
            }

            if (this.decimals) {
                this.current += number / 10**this.decimals++;
            } else {
                this.current = this.current * 10 + number;
            }
        },
        dot() {
            if (String(this.current).indexOf(".") === -1) {
                this.decimals = 1;
            }
        },
        setPrevious() {
            this.previous = this.current;
            this.operatorClicked = true;
        },
        divide() {
            this.operator = (a, b) => a / b;
            this.setPrevious();
        },
        multiply() {
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        subtract() {
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        add() {
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        equal() {
            this.current = this.operator(
                this.current,
                this.previous
            );
            
            this.previous = 0;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    width: 30%;
    margin: 0 auto;
    box-sizing: border-box;
}

.calculator div {
    padding: 0 0.4em;
    border: 1px solid #ccc;
}

.display {
    grid-column: 1 / 5;
    background-color: #ddd;
    color: #222;
    text-align: right;
    font-size: 1.6em;
}

.zero {
    grid-column: 1 / 3;
}

.operator {
    background-color: #001f3f;
    color: white;
}
</style>
