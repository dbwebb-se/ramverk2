/**
 * Broadcast server using websockets and express.
 */
"use strict";

const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const http = require("http");
//const url = require("url");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({
    server: server,
    clientTracking: true // keep track on connected clients
});



// Answer on all http requests
app.use(function (req, res) {
    console.log("HTTP request on " + req.url);
    res.send({ msg: "hello" });
});



// Broadcast data to everyone except one self (ws).
wss.broadcastExcept = (ws, data) => {
    let clients = 0;

    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            clients++;
            client.send(data);
        }
    });
    console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
};



// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
wss.on("connection", (ws /*, req*/) => {
    console.log("Connection received. Adding client.");

    wss.broadcastExcept(ws, `New client connected (${wss.clients.size}).`);

    ws.on("message", (message) => {
        console.log("Received: %s", message);
        wss.broadcastExcept(ws, message);
    });

    ws.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    ws.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
        wss.broadcastExcept(ws, `Client disconnected (${wss.clients.size}).`);
    });
});



// Startup server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
