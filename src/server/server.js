const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const port = process.env.PORT || 5000;
var clients = [];
var dispatcher = [];
var lat = [];
var longi = []; 


app.get('/api/con', (req, res) => {
  res.send({ express: 'Back end server connected' });
});

// on going TCP connection client-server
const io = socket(server);
io.on('connection', socket => {
	socket.on('User', (Client) => {
		console.log(`${Client} User Connected: ${socket.id}`);
		clients.push(socket.id);
	})

	socket.on('ServiceProvider', Dispatcher => {
		console.log(`${Dispatcher} is Connected ` + socket.id);
		dispatcher.push(dispatcher);
	})
	// for receiving an event to client.
	socket.on('client', (latidute, longitude) => {
		console.log(`${socket.id}  Client's coordinates are:`, latidute, longitude);
		io.sockets.emit('pass', latidute,longitude);
	})

	



	// for receiving an event to dispatcher.
	// socket.on('pass', click => {
	// 	console.log(`User ${socket.id} REQUEST!`);
	// })

	socket.on('disconnect', () => {
    console.log(`User Disconnected ${socket.id}`)
  })
})


server.listen(port, () => console.log(`Listening on port ${port}`));