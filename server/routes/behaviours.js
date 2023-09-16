// Import the required library for creating an Express router
const express = require('express');

// Create an Express router instance
const router = express.Router();

// Import behavior-related controller functions
const {
    getBehaviours,
    postBehaviour,
    updatedBehaviour,
    deleteBehaviour
} = require('../controllers/behaviours');

// Define routes for behaviors

// Route to get behaviors for a specific email (GET /api/v1/behaviours/:email)
router.get('/:email', getBehaviours);

// Route to create a new behavior (POST /api/v1/behaviours)
router.post('/', postBehaviour);

// Route to update an existing behavior by ID (PUT /api/v1/behaviours/:bid)
router.put('/:bid', updatedBehaviour);

// Route to delete an existing behavior by ID (DELETE /api/v1/behaviours/:bid)
router.delete('/:bid', deleteBehaviour);

// Export the router to be used in other parts of the application
module.exports = router;
