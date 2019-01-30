var app = require('express')();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const stock = require("./stock.js");

var princessTarta = {
    name: "Princesstårta",
    rate: 1.002,
    variance: 0.6,
    startingPoint: 20,
};

var mandelKubb = {
    name: "Mandel kubb",
    rate: 1.001,
    variance: 0.4,
    startingPoint: 20,
};

var cakes = [princessTarta, mandelKubb];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

setInterval(function () {
    cakes.map((cake) => {
        cake["startingPoint"] = stock.getStockPrice(cake);
        return cake;
    });

    // console.log(cakes);

    io.emit("stocks", cakes);
}, 5000);


http.listen(3000, function() {
   console.log('listening on *:3000');
});
