// Create web server
// Create a new web server using Express.js. The server should listen on port 3000 and respond with a message "Hello, World!" for all requests.

// The server should listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Respond with a message "Hello, World!" for all requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
