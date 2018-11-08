const m = require("mithril");
const quote = require("../models/quote.js");

const quoteComponent = {
    view: function () {
        return [
            m("h1", `"${quote.quote}"`),
            m("p", `- ${quote.author}`)
        ];
    }
};

module.exports = {
    view: function () {
        return m("div.root", [
            m(
                "div.message-board",
                quote.quote ?
                    m(quoteComponent) :
                    "No message yet!"
            ),
            quote.quote ?
                null :
                m(
                    "button.fetch-message-button",
                    { onclick: quote.fetchQuote },
                    "Fetch quote of the day"
                )
        ]);
    }
};
