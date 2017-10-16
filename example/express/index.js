#!/usr/bin/env node
"use strict";

// Create the app objekt
var express = require("express");
var app = express();
const path = require("path");


// Use app as template engine
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

// Serve static files
var staticFiles = path.join(__dirname, "public");

app.use(express.static(staticFiles));


// Add a route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    console.log(req.params);
    next();
});

app.get("/test/page", (req, res) => {
    res.render("page", {
        title: "Hey",
        message: "Hello there!"
    });
});

app.get("/test/home", (req, res) => {
    res.render("home", {
        title: "Home"
    });
});

app.get("/test/blog", (req, res) => {
    res.render("blog", {
        title: "Blog",
        posts: [
            {
                title: "Blog post 1",
                content: "Content 1."
            },
            {
                title: "Blog post 2",
                content: "Content 2."
            },
            {
                title: "Blog post 3",
                content: "Content 3."
            },
        ]
    });
});

app.get("/test/markdown", (req, res) => {
    res.render("markdown", {
        title: "Markdown"
    });
});

app.get("/test/markdown-include", (req, res) => {
    res.render("markdown-include", {
        title: "Markdown include",
        file: "../content/article.md"
    });
});

app.get("/test/:title/:message", (req, res) => {
    console.log(req.path);
    console.log(req.params);
    res.render("page", {
        title: req.params.title,
        message: req.params.message
    });
});

// Testing routes with method
app.get("/user", (req, res) => {
    res.send("Got a GET request at " + req.originalUrl);
});

app.post("/user", (req, res) => {
    res.send("Got a POST request at " + req.originalUrl);
});

app.put("/user", (req, res) => {
    res.send("Got a PUT request at " + req.originalUrl);
});

app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at " + req.originalUrl);
});

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

// Note the error handler takes four arguments
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});


// Start up server
console.log("Express is ready.");
app.listen(1337);
