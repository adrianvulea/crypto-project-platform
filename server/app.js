// Load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Use environment variables
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DATABASE_URL;

// Connect to the database
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database connection error:', err));

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Crypto Project Publishing Platform API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
