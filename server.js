const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('addState', (data) => {
    console.log(`User added state: ${data}`);
    // Handle the state addition logic here
    // You can emit events or perform other actions based on the received state data
  });
});

// Start the server
const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Route handler for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
