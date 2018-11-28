const m = require("mithril");
const utilities = require("../models/utilities.js");

module.exports = {
    view: function () {
        return m("div.calculator", [
            m("div.display", utilities.current || 0),
            m("div.btn", { onclick: utilities["clear"] }, "C"),
            m("div.btn", { onclick: utilities["sign"] }, "+/-"),
            m("div.btn", { onclick: utilities["percentage"] }, "%"),
            m("div.btn.operator", { onclick: utilities["divide"] }, "÷"),
            m("div.btn", { onclick: function() { utilities.append(7); } }, "7"),
            m("div.btn", { onclick: function() { utilities.append(8); } }, "8"),
            m("div.btn", { onclick: function() { utilities.append(9); } }, "9"),
            m("div.btn.operator", { onclick: utilities["multiply"] }, "x"),
            m("div.btn", { onclick: function() { utilities.append(4); } }, "4"),
            m("div.btn", { onclick: function() { utilities.append(5); } }, "5"),
            m("div.btn", { onclick: function() { utilities.append(6); } }, "6"),
            m("div.btn.operator", { onclick: utilities["subtract"] }, "-"),
            m("div.btn", { onclick: function() { utilities.append(1); } }, "1"),
            m("div.btn", { onclick: function() { utilities.append(2); } }, "2"),
            m("div.btn", { onclick: function() { utilities.append(3); } }, "3"),
            m("div.btn.operator", { onclick: utilities["add"] }, "+"),
            m("div.btn.zero", { onclick: function() { utilities.append(0); } }, "0"),
            m("div.btn", { onclick: utilities["dot"] }, "."),
            m("div.btn.operator", { onclick: utilities["equal"] }, "="),
        ]);
    }
};
