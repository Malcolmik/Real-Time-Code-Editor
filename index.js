const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

// Import room management and Socket.IO handlers
const { createRoom, joinRoom } = require('./rooms');
const { setupSocket } = require('./socket');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins or restrict to your front-end's domain
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// REST API endpoints
app.post('/create-room', (req, res) => {
  const roomId = createRoom(); // Create a new room
  res.json({ roomId }); // Return the room ID to the client
});

app.post('/join-room', (req, res) => {
  const { roomId, username } = req.body;
  const success = joinRoom(roomId, username); // Add the user to the room
  if (!success) return res.status(404).json({ error: 'Room not found' });
  res.json({ success: true });
});

// Initialize Socket.IO handlers
setupSocket(io);

// Start the server
const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
