/**
 * Test for getting started with Selenium.
 */
"use strict";



// https://blog.testproject.io/2018/03/08/selenium-javascript-best-practices/
const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;



// Test suite
test.describe("Calculator", function() {

    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://work/ramverk2/example/test/functiontest-selenium/src/multipage/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit()
        done();
    });



    // Test case
    test.it("Webpage should have expected title", function(done) {
        let promise = browser.getTitle();
        
        promise.then(function(title) {
            assert.equal(title, "multipage");
        })

        // Crashade med default selenium versionen 4.0.0.alpha 1 något, fick sänka till 3.6.0 för att fungera
        browser.getTitle().then(function(title) {
            assert.equal(title, "multipage");
        });
        done();
    });



    // test.it("Able to do addition", function(done) {
    //     let promiseNumbers = browser.findElements(By.className("number"))
    // 
    //     promiseNumbers.then(function(numberElements) {
    //         
    //         // press number 1
    //         numberElements[6].click();
    //         // press +
    //         browser.findElements(By.className("operator")).then(function(operatorElements) {
    //             operatorElements[3].click()
    //             // press number 5
    //             numberElements[4].click();
    //             // press =
    //             operatorElements[4].click();
    //         });
    //     });
    //     
    //     // get sum
    //     browser.findElement(By.id("display")).then(function(displayElement) {
    //         displayElement.getText().then(function(value) {
    //             assert.equal(value, "6");
    //         });
    //     });
    // 
    //     done();
    // });

});
