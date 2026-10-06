const express = require('express');
const app = express();

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to ExpressJS Routing!');
});

// Route with parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Route with query parameter
app.get('/search', (req, res) => {
  res.send(`You searched for: ${req.query.q}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));




