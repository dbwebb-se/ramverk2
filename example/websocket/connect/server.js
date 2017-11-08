/**
 * Minimal http and websocket server to answer on a connect.
 */
"use strict";

const http = require("http");
const port = 1337;

const requestHandler = (request, response) => {
    console.log("Webserver received: " + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
};

const server = http.createServer(requestHandler);

var io = require("socket.io")(server);

io.on("connection", function (client) {
    console.log("Connection received " + client);

    client.on("event", (data) => {
        console.log("Event received " + data);
    });

    client.on("disconnect", () => {
        console.log("Client disconnected.");
    });
});

server.listen(port, (err) => {
    if (err) {
        return console.log("Something bad happened", err);
    }

    console.log(`Server is listening on ${port}`);
});
