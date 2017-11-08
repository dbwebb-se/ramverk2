/**
 * Minimal express websocket server to answer on a connect.
 */
"use strict";

const app    = require('express')();
const server = require('http').createServer(app);
const io     = require("socket.io")();

io.on("connection", (client) => {
    console.log("Client connected " + client);

    client.on("event", (data) => {
        console.log("Event received " + data);
    });

    client.on("disconnect", () => {
        console.log("Client disconnected " + client);
    });
});

server.listen(1337);
console.log("Listening to 1337.");
