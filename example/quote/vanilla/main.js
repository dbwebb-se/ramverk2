(function () {
    "use strict";

    var root = document.getElementById('root');

    var messageBoard = document.createElement("div");

    messageBoard.className = "message-board";
    messageBoard.textContent = "No message yet!";

    root.appendChild(messageBoard);

    var fetchMessageButton = document.createElement("button");

    fetchMessageButton.className = "fetch-message-button";
    fetchMessageButton.textContent = "Fetch quote of the day";

    fetchMessageButton.addEventListener("click", function() {
        fetch('http://quotes.rest/qod.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                var quote = result.contents.quotes[0].quote;
                var author = result.contents.quotes[0].author;

                messageBoard.innerHTML = "<h1>\"" + quote + "\"</h1><p>- " + author + "</p>";

                root.removeChild(fetchMessageButton);
            });
    });

    root.appendChild(fetchMessageButton);
})();
