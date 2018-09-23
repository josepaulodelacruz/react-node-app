const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const port = process.env.PORT || 5000;
const path = require('path');
var clients = [];
var dispatcher = [];


app.get('/api/con', (req, res) => {
  res.send({ express: 'Back end server connected' });
});

app.use( express.static(__dirname + '/../../build') );

// on going TCP connection client-server
const io = socket(server);
io.on('connection', socket => {
	socket.on('User', (Client) => {	
		console.log(`${Client} User Connected: ${socket.id}`);
	})

	socket.on('ServiceProvider', Dispatcher => {
		console.log(`Dispatcher ${Dispatcher} is Connected`);
	})
	// for receiving an event to client.
	socket.on('client', (latidute, longitude, socketId, desireLocation, coordinates) => {
		console.log(`${socket.id}  Client's coordinates are:`, latidute, longitude, 'Destination:',desireLocation, coordinates);
		io.sockets.emit('pass', latidute,longitude, socketId,desireLocation, coordinates);
		console.log(clients);
	})
	// Sending to specific Client
	socket.on('decline', id => {
		console.log(`Send to ${id} Your request has been decline`);
		io.to(id).emit('declinedReceive', id);
	});

	socket.on('accept', id => {
		console.log(`Accept Request ${id} Tricle Deployed`);
		io.to(id).emit('AcceptRequest', id);
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