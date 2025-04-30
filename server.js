const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

// Initialize Express application
const app = express();

// Route handler for root path
app.get('/', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello, World!\n');
});

// Route handler for /good-evening path
app.get('/good-evening', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/plain');
  res.send('Good evening\n');
});

// Start the server
const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
