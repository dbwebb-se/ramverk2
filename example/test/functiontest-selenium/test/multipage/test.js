/**
 * Test for getting started with Selenium.
 */
"use strict";



// https://blog.testproject.io/2018/03/08/selenium-javascript-best-practices/
var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get("http://localhost/git/ramverk2/example/test/" +
    "functiontest-selenium/src/multipage/");

// Two different ways to work with promises
// Way 1
let promise = browser.getTitle();

promise.then(function(title) {
    console.log(title);
});

// Way 2
browser.getTitle().then(function( title ) {
    console.log(title);
});

browser.quit();