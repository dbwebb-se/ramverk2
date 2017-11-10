/**
 * Minimal standalone websocket server to answer on a connect.
 */
"use strict";

const port = process.env.DBWEBB_PORT || 1337;
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: port });

wss.on("connection", (socket) => {
    console.log("Connection received: " + socket);
    //console.log(socket);
});

console.log(`Server is listening on ${port}`);
