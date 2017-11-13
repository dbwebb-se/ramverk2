/**
 * Minimal express websocket server to answer on a connect.
 */
"use strict";

const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const http = require("http");
//const url = require("url");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });



// Answer on all http requests
app.use(function (req, res) {
    res.send({ msg: "hello" });
});



// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
wss.on("connection", (/*ws, req*/) => {
    //const location = url.parse(req.url, true);
    // You might use location.query.access_token to authenticate or share
    // sessions or req.headers.cookie
    // (see http://stackoverflow.com/a/16395220/151312)

    console.log("Connection received.");
    // console.log(location);
    // console.log(ws);
    // console.log(req);
});



// Startup server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
