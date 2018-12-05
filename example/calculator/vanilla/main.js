(function () {
    "use strict";

    var state = {
        current: 0,
        previous: 0,
        decimals: null,
        operatorClicked: false,
        operator: null,
    };

    var utilities = {
        divide: function() {
            state.operator = function (a, b) {
                return a / b;
            };
            utilities.setPrevious();
        },

        multiply: function() {
            state.operator = function(a, b) {
                return a * b;
            };
            utilities.setPrevious();
        },

        subtract: function () {
            state.operator = function(a, b) {
                return a - b;
            };
            utilities.setPrevious();
        },

        add: function() {
            state.operator = function(a, b) {
                return a + b;
            };
            utilities.setPrevious();
        },

        clear: function() {
            state.current = 0;
            state.previous = 0;
            state.decimals = null;
            utilities.updateDisplay();
        },

        sign: function() {
            state.current = -state.current;
            utilities.updateDisplay();
        },

        percentage: function() {
            state.current = state.current / 100;
            utilities.updateDisplay();
        },

        dot: function() {
            if (String(state.current).indexOf(".") === -1) {
                state.decimals = 1;
            }
        },

        equal: function() {
            state.current = state.operator(
                state.current,
                state.previous
            );

            state.previous = 0;

            utilities.updateDisplay();
        },

        append: function() {
            var number = parseInt(this.textContent);

            if (state.operatorClicked) {
                state.current = 0;
                state.decimals = null;
                state.operatorClicked = false;
            }

            if (state.decimals) {
                state.current += number / Math.pow(10, state.decimals++);
            } else {
                state.current = state.current * 10 + number;
            }

            utilities.updateDisplay();
        },

        updateDisplay: function() {
            var display = document.getElementById("display");

            display.innerHTML = state.current;
        },

        setPrevious: function() {
            state.previous = state.current;
            state.operatorClicked = true;
        },
    };

    utilities.updateDisplay();

    var numbers = document.getElementsByClassName("number");

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", utilities.append);
    }

    var notNumbers = document.getElementsByClassName("not-number");

    for (var j = 0; j < notNumbers.length; j++) {
        notNumbers[j].addEventListener("click", utilities[notNumbers[j].id]);
    }
})();
