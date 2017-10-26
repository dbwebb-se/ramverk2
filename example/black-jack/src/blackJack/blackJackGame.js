/**
 * A module for a Black Jack game.
 *
 * @module
 */
import Deck from "../cardDeck/cardDeck";

export default class BlackJackGame {

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
