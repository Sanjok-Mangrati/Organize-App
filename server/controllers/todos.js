// Logic to handle HTTP requests and responses for the "todos" route


// Import the database connection pool
const pool = require('../db');

// Function to retrieve todos for a specific behavior
const getTodos = async (req, res) => {
    try {
        // Extract the behavior ID from the request parameters
        const { bid } = req.params;

        // Retrieve todos from the database for the specified behavior, ordered by todo ID
        const todos = await pool.query("SELECT tid, name, status FROM todos WHERE todos.bid = $1 ORDER BY tid", [bid]);

        // Respond with the retrieved todos as JSON
        res.json(todos.rows);

    } catch (error) {
        console.error(error);
    }
}

// Function to create a new todo
const postTodo = async (req, res) => {
    try {
        // Extract the behavior ID, todo name, and status from the request body
        const { bid, name, status } = req.body;

        // Insert the new todo into the database
        await pool.query("INSERT INTO todos(bid, name, status) VALUES ($1, $2, $3)", [bid, name, status]);

        // Respond with a success status code and message
        res.json({ success: true });

    } catch (error) {
        console.error(error);
    }
}

// Function to update an existing todo
const updateTodo = async (req, res) => {
    try {
        // Extract the updated todo name and status from the request body
        const { name, status } = req.body;

        // Update the todo in the database based on the specified todo ID
        await pool.query("UPDATE todos SET name = $1, status = $2 WHERE todos.tid = $3", [name, status, req.params.tid]);

        // Respond with a success status code and message
        res.json({ success: true });

    } catch (error) {
        console.error(error);
    }
}

// Function to delete a todo
const deleteTodo = async (req, res) => {
    try {
        // Extract the todo ID from the request parameters
        const { tid } = req.params;

        // Delete the todo from the database based on the specified todo ID
        await pool.query("DELETE FROM todos WHERE todos.tid = $1", [tid]);

        // Respond with a success status code and message
        res.json({ success: true });

    } catch (error) {
        console.error(error);
    }
}

// Export the functions for use in other parts of the application
module.exports = {
    getTodos,
    postTodo,
    updateTodo,
    deleteTodo
};
