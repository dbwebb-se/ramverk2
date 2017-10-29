/**
 * Test for class Card.
 */
"use strict";

/* global describe it */

var assert = require("assert");
const Card = require("../../src/card/card");

describe("Get cards with different values", function() {
    describe("Get card with value 0", function() {
        it("should be card ♣A", function() {
            let card = new Card();
            let res = card.getCard(0);

            assert.equal(res, "♣A");
        });

        it("should have rank 14", function() {
            let card = new Card();
            let res = card.getRank(0);

            assert.equal(res, 14);
        });
    });

    describe("Get card with value 1", function() {
        it("should be card ♣2", function() {
            let card = new Card();
            let res = card.getCard(1);

            assert.equal(res, "♣2");
        });

        it("should have rank 2", function() {
            let card = new Card();
            let res = card.getRank(1);

            assert.equal(res, 2);
        });
    });

    describe("Get card with value 13", function() {
        it("should be card ♦A", function() {
            let card = new Card();
            let res = card.getCard(13);

            assert.equal(res, "♦A");
        });

        it("should have rank 14", function() {
            let card = new Card();
            let res = card.getRank(13);

            assert.equal(res, 14);
        });
    });

    describe("Get card with value 26", function() {
        it("should be card ♠A", function() {
            let card = new Card();
            let res = card.getCard(26);

            assert.equal(res, "♠A");
        });

        it("should have rank 14", function() {
            let card = new Card();
            let res = card.getRank(26);

            assert.equal(res, 14);
        });
    });

    describe("Get card with value 39", function() {
        it("should be card ♥A", function() {
            let card = new Card();
            let res = card.getCard(39);

            assert.equal(res, "♥A");
        });

        it("should have rank 14", function() {
            let card = new Card();
            let res = card.getRank(39);

            assert.equal(res, 14);
        });
    });

    describe("Get card with value 51", function() {
        it("should be card ♥K", function() {
            let card = new Card();
            let res = card.getCard(51);

            assert.equal(res, "♥K");
        });

        it("should have rank 13", function() {
            let card = new Card();
            let res = card.getRank(51);

            assert.equal(res, 13);
        });
    });

    describe("Get card with value 52", function() {
        it("should be undefined", function() {
            let card = new Card();
            let res = card.getCard(52);

            assert.equal(res, undefined);
        });

        it("should have rank undefined", function() {
            let card = new Card();
            let res = card.getRank(52);

            assert.equal(res, undefined);
        });
    });
});
