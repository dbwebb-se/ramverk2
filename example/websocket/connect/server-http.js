/**
 * Minimal http server.
 */
"use strict";

const http = require("http");
const port = process.env.DBWEBB_PORT || 1337;

const requestHandler = (request, response) => {
    console.log("Webserver received: " + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("Something bad happened", err);
    }

    console.log(`Server is listening on ${port}`);
});
