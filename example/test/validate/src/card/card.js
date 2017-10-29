/**
 * A module for a standard playing card.
 *
 * @module
 */
"use strict";

class Card {
    /**
     * @constructor
     *
     * @param {object} options - Configure by sending options.
     */
    constructor(options = {}) {
        this.suits   = options.suits || ["♣", "♦", "♠", "♥"];
        this.pipFace = options.pipFace || [
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
        ];
        this.rank = options.rank || [
            14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
        ];
        this.ranks      = this.pipFace.length;
        this.numOfCards = this.ranks * this.suits.length;
    }



    /**
     * Get a card to display based on the id of the card.
     *
     * @param {integer} id - The id of the card.
     *
     * @returns {string} A string representing the card.
     */
    getCard(id) {
        var suit;
        var pipFace;

        if (id < 0 || id >= this.numOfCards) {
            return undefined;
        }

        suit    = Math.floor(id / this.ranks);
        pipFace = Math.floor(id % this.ranks);
        return this.suits[suit] + this.pipFace[pipFace];
    }



    /**
     * Get the card rank from its id.
     *
     * @param {integer} value - The id of the card.
     *
     * @returns {integer} A value representing its rank.
     */
    getRank(id) {
        if (id < 0 || id >= this.numOfCards) {
            return undefined;
        }

        return this.rank[Math.floor(id % this.ranks)];
    }
}



// Export module
module.exports = Card;
