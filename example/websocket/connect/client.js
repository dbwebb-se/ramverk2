/**
 * To setup a websocket connection, and nothing more.
 */
(function () {
    "use strict";

    let websocket;
    let url     = document.getElementById("url");
    let connect = document.getElementById("connect");

    connect.addEventListener("click", function(/*event*/) {
        console.log("Connecting to: " + url.value);
        websocket = new WebSocket(url.value);

        websocket.onopen = function() {
            console.log("The websocket is now open.");
        };
    }, false);
})();
