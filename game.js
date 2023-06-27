// Socket.io event handling
const socket = io();

socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});

socket.on('addState', (data) => {
  console.log(`User added state: ${data}`);
  // Handle the state addition logic here
  // You can emit events or perform other actions based on the received state data
});

// The rest of your existing code goes here

