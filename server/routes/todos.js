// Import the required library for creating an Express router
const express = require('express');

// Create an Express router instance
const router = express.Router();

// Import todo-related controller functions
const {
    getTodos,
    postTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todos');

// Define routes for todos

// Route to get todos for a specific behavior ID (GET /api/v1/todos/:bid)
router.get('/:bid', getTodos);

// Route to create a new todo (POST /api/v1/todos)
router.post('/', postTodo);

// Route to update an existing todo by ID (PUT /api/v1/todos/:tid)
router.put('/:tid', updateTodo);

// Route to delete an existing todo by ID (DELETE /api/v1/todos/:tid)
router.delete('/:tid', deleteTodo);

// Export the router to be used in other parts of the application
module.exports = router;
