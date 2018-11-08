const m = require("mithril");

const quote = {
    quote: null,
    author: null,
    fetchQuote: function () {
        return m.request({
            method: "GET",
            url: "http://quotes.rest/qod.json"
        }).then(function(result) {
            quote.quote = result.contents.quotes[0].quote;
            quote.author = result.contents.quotes[0].author;
        });
    }
};

module.exports = quote;
