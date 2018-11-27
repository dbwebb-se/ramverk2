var state = {
    current: 0,
    previous: 0,
    decimals: null,
    operatorClicked: false,
    operator: null,
};

var utilities = {
    divide: function() {
        state.operator = (a, b) => a / b;
        utilities.setPrevious();
    },

    multiply: function() {
        state.operator = (a, b) => a * b;
        utilities.setPrevious();
    },

    subtract: function () {
        state.operator = (a, b) => a - b;
        utilities.setPrevious();
    },

    add: function() {
        state.operator = (a, b) => a + b;
        utilities.setPrevious();
    },

    setPrevious: function() {
        state.previous = state.current;
        state.operatorClicked = true;
    },
};

(function () {
    "use strict";

    var root = document.getElementById("root");
    var calculator = document.createElement("div");

    calculator.className = "calculator";

    calculator.innerHTML += '<div class="display" id="display">' +
        (state.current || 0) + '</div>' +
        '<div id="clear" class="btn not-number">C</div>' +
        '<div id="sign" class="btn not-number">+/-</div>' +
        '<div id="percentage" class="btn not-number">%</div>' +
        '<div id="divide" class="btn not-number operator">÷</div>' +
        '<div class="btn number">7</div>' +
        '<div class="btn number">8</div>' +
        '<div class="btn number">9</div>' +
        '<div id="multiply" class="btn not-number operator">x</div>' +
        '<div class="btn number">4</div>' +
        '<div class="btn number">5</div>' +
        '<div class="btn number">6</div>' +
        '<div id="subtract" class="btn not-number operator">-</div>' +
        '<div class="btn number">1</div>' +
        '<div class="btn number">2</div>' +
        '<div class="btn number">3</div>' +
        '<div id="add" class="btn not-number operator">+</div>' +
        '<div class="btn zero number">0</div>' +
        '<div id="dot" class="btn not-number">.</div>' +
        '<div id="equal" class="btn not-number operator">=</div>';

    root.appendChild(calculator);

    var numbers = document.getElementsByClassName("number");

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", append);
    }

    var notNumbers = document.getElementsByClassName("not-number");

    for (var i = 0; i < notNumbers.length; i++) {
        notNumbers[i].addEventListener("click", utilities[notNumbers[i].id]);
    }

    function updateDisplay(number) {
        var display = document.getElementById("display");

        display.innerHTML = number;
    }

    function clear() {
        state.current = 0;
    }

    function sign() {
        state.current = -state.current;
    }

    function percentage() {
        state.current = state.current / 100;
    }


    function append() {
        var number = parseInt(this.textContent);

        if (state.operatorClicked) {
            state.current = 0;
            state.decimals = null;
            state.operatorClicked = false;
        }

        if (state.decimals) {
            state.current += number / 10**state.decimals++;
        } else {
            state.current = state.current * 10 + number;
        }

        updateDisplay(state.current);
    }

    function dot() {
        if (String(state.current).indexOf(".") === -1) {
            state.decimals = 1;
        }
    }

    function equal() {
        state.current = state.operator(
            state.current,
            state.previous
        );

        state.previous = 0;
    }
})();
