const express = require('express');
const app = express();

// Handle POST requests to /subscribe
app.post('/subscribe', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(`Name: ${name}, Email: ${email}`);
  res.send('Thank you for subscribing!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
