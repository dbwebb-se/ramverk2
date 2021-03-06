const m = require("mithril");

module.exports = {
    view: function () {
        return m("nav.nav", [
            m("a", {
                oncreate: m.route.link,
                href: "/"
            }, "Home"),
            m("a", {
                oncreate: m.route.link,
                href: "/about"
            }, "About"),
        ]);
    }
};
