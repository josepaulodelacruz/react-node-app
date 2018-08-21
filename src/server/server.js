const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const port = process.env.PORT || 5000;

app.get('/api/con', (req, res) => {
  res.send({ express: 'Back end server connected' });
});

const io = socket(server);
io.on('connection', function(socket){
	console.log(`User Connected: ${socket.id}`);

	socket.on('disconnect', () => {
    console.log(`User Disconnected ${socket.id}`)
  })
})


server.listen(port, () => console.log(`Listening on port ${port}`));