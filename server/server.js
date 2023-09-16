// Import the required libraries
const express = require('express');
const app = express();

// Import the CORS library to handle cross-origin requests
const cors = require('cors');

// Import the route handlers for behaviors, todos, and authentication
const behaviourRoutes = require('./routes/behaviours');
const TodoRoutes = require('./routes/todos');
const AuthRoutes = require('./routes/auth');

// Load environment variables from a .env file
require('dotenv').config();

// Middleware for parsing incoming requests into JSON
app.use(express.json());

// Middleware to prevent CORS (Cross-Origin Resource Sharing) errors
app.use(cors());

// Middleware for routing requests that come to the base path /api/v1/behaviours
app.use('/api/v1/behaviours', behaviourRoutes);

// Middleware for routing requests that come to the base path /api/v1/todos
app.use('/api/v1/todos', TodoRoutes);

// Middleware for routing requests that come to the base path /api/v1
app.use('/api/v1', AuthRoutes);

// Start the Express server and listen on the specified port from environment variables
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is listening on port ${process.env.SERVER_PORT}...`);
});
