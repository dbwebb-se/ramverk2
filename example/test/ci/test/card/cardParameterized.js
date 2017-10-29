/**
* Test for class Car, parameterized version of testsuite.
 */
"use strict";

/* global describe it */

var assert = require("assert");
const Card = require("../../src/card/card");



/**
 * Check a card with its expected card face.
 */
function checkCard(id, expected) {
    let card = new Card();
    let res = card.getCard(id);

    assert.equal(res, expected);
}



/**
 * Check the card rank.
 */
function checkRank(id, expected) {
    let card = new Card();
    let res = card.getRank(id);

    assert.equal(res, expected);
}



/**
 * Testsuite
 */
describe("Check card ranks", function() {
    var tests = [
        {id: 0,  face: "♣A", rank: 14},
        {id: 1,  face: "♣2", rank: 2},
        {id: 13, face: "♦A", rank: 14},
        {id: 26, face: "♠A", rank: 14},
        {id: 39, face: "♥A", rank: 14},
        {id: 51, face: "♥K", rank: 13},
        {id: 52, face: undefined, rank: undefined},
    ];

    tests.forEach(function(test) {
        describe("Get card with value " + test.id, function() {
            it("should be card " + test.face, function () {
                checkCard(test.id, test.face);
            });
            it("should have rank " + test.rank, function () {
                checkRank(test.id, test.rank);
            });
        });
    });
});
