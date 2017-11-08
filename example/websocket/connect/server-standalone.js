/**
 * Minimal standalone websocket server to answer on a connect.
 */
"use strict";

const io = require("socket.io")();

io.on("connection", (client) => {
    console.log("Connection received " + client);

    client.on("event", (data) => {
        console.log("Event received " + data);
    });

    client.on("disconnect", () => {
        console.log("Client disconnected.");
    });
});

io.listen(1337);
console.log("Listening to 1337.");
