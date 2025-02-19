const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// For any other routes, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Use Heroku's port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
