// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function (req, res) {
//      res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//      socket.on('chat message', function (msg) {
//           io.emit('chat message', msg);
//      });
// });

// http.listen(3000, function () {
//      console.log('listening on *:3000');
// });
// var http = require("http");
// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html>");
//     response.write("<head><title>Node.js</title></head>");
//     response.write("<body>Hello Web</body>");
//     response.write("</html>");
//     response.end();
// }).listen(9999);