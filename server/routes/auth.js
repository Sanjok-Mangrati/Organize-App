// Import the required library for creating an Express router
const express = require('express');

// Create an Express router instance
const router = express.Router();

// Import the signup and login functions from the auth controller
const { signup, login } = require('../controllers/auth');

// Define routes for user signup and login

// Route for user signup (POST /api/v1/signup)
router.post('/signup', signup);

// Route for user login (POST /api/v1/login)
router.post('/login', login);

// Export the router to be used in other parts of the application
module.exports = router;
