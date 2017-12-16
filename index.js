const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
     res.sendFile(__dirname + '/index.html');
});

io.on('conneciton', function (socket) {
     console.log('someone connected');
});

http.listen(3000, function () {
     console.log('listening on *:3000');
});