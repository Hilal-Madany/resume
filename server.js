const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the subscription form
app.get('/subscription.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'subscription.html'));
});

// Handle form submissions
app.post('/subscribe', (req, res) => {
  // TODO: Handle subscription form submissions
  res.send('Thank you for subscribing!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});