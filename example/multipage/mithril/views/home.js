const m = require("mithril");
const nav = require("./nav.js");

module.exports = {
    view: function () {
        return [
            m(nav),
            m("div.content", [
                m("h1", "Home")
            ])
        ];
    }
};
