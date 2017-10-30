/**
 * A module for a deck of cards.
 *
 * @module
 */
import Card from "../card/card";

export default class cardDeck {

    /**
     * @constructor
     *
     * @param {object} options - Configure by sending options.
     */
    constructor(options = {}) {
        this.x = options.x || 0;
    }



    /**
     * TDD
     *
     * @param {object} options - Configure by sending options.
     */
    draw() {
    }
}
