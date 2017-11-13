/**
 * Websocket and node builtin httpd server implementing an echo server.
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



// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
wss.on("connection", (ws/*, req*/) => {
    console.log("Connection received.");
    // console.log(ws);
    // console.log(req);

    ws.on("message", (message) => {
        console.log("Received: %s", message);
        ws.send(message);
    });

    ws.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    ws.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
    });
});



server.listen(port, (err) => {
    if (err) {
        return console.log("Something bad happened", err);
    }

    console.log(`Server is listening on ${port}`);
});
