const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

// Create Express application instance
const app = express();

// Define route for root path that returns 'Hello, World!'
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!\n');
});

// Define route for '/good-evening' path that returns 'Good evening'
app.get('/good-evening', (req, res) => {
  res.status(200).send('Good evening');
});

// Start the server using Express app.listen()
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
