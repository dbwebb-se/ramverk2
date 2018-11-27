const m = require("mithril");

const utilities = {
    current: 0,
    previous: 0,
    decimals: null,
    operatorClicked: false,
    operator: null,

    divide: function() {
        utilities.operator = (a, b) => a / b;
        utilities.setPrevious();
    },

    multiply: function() {
        utilities.operator = (a, b) => a * b;
        utilities.setPrevious();
    },

    subtract: function () {
        utilities.operator = (a, b) => a - b;
        utilities.setPrevious();
    },

    add: function() {
        utilities.operator = (a, b) => a + b;
        utilities.setPrevious();
    },

    clear: function() {
        utilities.current = 0;
        utilities.previous = 0;
        utilities.decimals = null;
        m.redraw();
    },

    sign: function() {
        utilities.current = -utilities.current;
        m.redraw();
    },

    percentage: function() {
        utilities.current = utilities.current / 100;
        m.redraw();
    },

    dot: function() {
        if (String(utilities.current).indexOf(".") === -1) {
            utilities.decimals = 1;
        }
    },

    equal: function() {
        utilities.current = utilities.operator(
            utilities.current,
            utilities.previous
        );

        utilities.previous = 0;

        m.redraw();
    },

    append: function(number) {
        if (utilities.operatorClicked) {
            utilities.current = 0;
            utilities.decimals = null;
            utilities.operatorClicked = false;
        }

        if (utilities.decimals) {
            utilities.current += number / 10**utilities.decimals++;
        } else {
            utilities.current = utilities.current * 10 + number;
        }

        m.redraw();
    },

    setPrevious: function() {
        utilities.previous = utilities.current;
        utilities.operatorClicked = true;
    },
};

module.exports = utilities;
