const app = require('express')();
const http = require('http').Server(app);
const socketio = require('socket.io');
let io = socketio(http);

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h2>');
});

app.get('/test', (req, res) => {
  res.sendFile(__dirname+'/views/chat.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

http.listen(3000, () => {
  console.log('Listening on *:3000');
});

