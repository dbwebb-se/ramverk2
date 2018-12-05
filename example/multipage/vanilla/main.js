(function () {
    "use strict";

    var routes = {};
    var nav = document.getElementById('nav');
    var content = document.getElementById('content');

    function router() {
        var url = location.hash.slice(2) || '/';

        renderRoute(url);
    }

    function registerRoute(url, name, pageRender) {
        routes[url] = {
            renderer: pageRender,
            name: name,
        };
    }

    function renderRoute(url) {
        if (routes[url] && routes[url]["renderer"]) {
            removeAllNodes(content);

            content.appendChild(routes[url]["renderer"]());
        }
    }

    function renderNav() {
        removeAllNodes(nav);

        for (var route in routes) {
            if (routes.hasOwnProperty(route)) {
                var link = document.createElement("a");

                link.href = "#!" + route;
                link.textContent = routes[route].name;
                nav.appendChild(link);
            }
        }
    }

    function removeAllNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    var renderHome = function () {
        var home = document.createElement("div");

        home.className = "home";

        var title = document.createElement("h1");

        title.textContent = "Home";

        home.appendChild(title);

        return home;
    };

    var renderAbout = function () {
        var about = document.createElement("div");

        about.className = "about";

        var title = document.createElement("h1");

        title.textContent = "About";

        about.appendChild(title);

        return about;
    };

    registerRoute("/", "Home", renderHome);
    registerRoute("/about", "About", renderAbout);

    renderNav();

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
})();
