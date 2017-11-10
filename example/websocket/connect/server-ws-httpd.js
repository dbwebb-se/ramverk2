/**
 * Websocket and node builtin httpd server.
 */
"use strict";

const port = process.env.DBWEBB_PORT || 1337;
const http = require("http");
const server = http.createServer((request, response) => {
    console.log("Webserver received: " + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

const WebSocket = require("ws");
const wss = new WebSocket.Server({
    server: server
});

wss.on("connection", (socket) => {
    console.log("Connection received: " + socket);
    //console.log(socket);
});

server.listen(port, (err) => {
    if (err) {
        return console.log("Something bad happened", err);
    }

    console.log(`Server is listening on ${port}`);
});
