(function () {
    let root = document.getElementById('root');

    let messageBoard = document.createElement("div");
    messageBoard.className = "message-board";
    messageBoard.textContent = "No message yet!";

    root.appendChild(messageBoard);

    let fetchMessageButton = document.createElement("button");
    fetchMessageButton.className = "fetch-message-button";
    fetchMessageButton.textContent = "Fetch quote of the day";

    fetchMessageButton.addEventListener("click", (event) => {
        fetch('http://quotes.rest/qod.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            let quote = result.contents.quotes[0].quote;
            let author = result.contents.quotes[0].author;

            messageBoard.innerHTML = `<h1>"${quote}"</h1><p>- ${author}</p>`;

            root.removeChild(fetchMessageButton);
        });
    });

    root.appendChild(fetchMessageButton);
})();
