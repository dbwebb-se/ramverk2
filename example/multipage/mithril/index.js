const m = require("mithril");
const home = require("./views/home.js");
const about = require("./views/about.js");

m.route(document.body, "/", {
    "/": home,
    "/about": about,
});
