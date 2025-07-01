// Import core modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js')

// Import routes
const peoplerouter = require('./routes/peoplerouter.jsx');

// Load environment variables
dotenv.config();

connectDB();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route handling
app.use('/api/people', peoplerouter);

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});