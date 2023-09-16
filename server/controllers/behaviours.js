// Logic to handle HTTP requests and responses for the "behaviours" route

// Import the database connection pool
const pool = require("../db");

// Function to retrieve behaviors for a specific user
const getBehaviours = async (req, res) => {
    try {
        // Extract the email from the request parameters
        const { email } = req.params;

        // Retrieve behaviors from the database for the specified email, ordered by behavior ID
        const behaviours = await pool.query(
            "SELECT bid, behaviour FROM behaviours WHERE behaviours.email = $1 ORDER BY behaviours.bid",
            [email]
        );

        // Respond with the retrieved behaviors as JSON
        res.json(behaviours.rows);
    } catch (error) {
        console.error(error);
    }
};

// Function to create a new behavior
const postBehaviour = async (req, res) => {
    try {
        // Extract the email and behavior from the request body
        const { email, behaviour } = req.body;

        // Insert the new behavior into the database
        await pool.query(
            "INSERT INTO behaviours(email, behaviour) VALUES ($1, $2)",
            [email, behaviour]
        );

        // Respond with a success status code and message
        res.status(201).json({ success: true });
    } catch (error) {
        console.error(error);
    }
};

// Function to update an existing behavior
const updatedBehaviour = async (req, res) => {
    try {
        // Extract the updated behavior from the request body
        const { behaviour } = req.body;

        // Update the behavior in the database based on the specified behavior ID
        await pool.query(
            "UPDATE behaviours SET behaviour = $1 WHERE behaviours.bid = $2",
            [behaviour, req.params.bid]
        );

        // Respond with a success status code and message
        res.json({ success: true });
    } catch (error) {
        console.error(error);
    }
};

// Function to delete a behavior
const deleteBehaviour = async (req, res) => {
    try {
        // Extract the behavior ID from the request parameters
        const { bid } = req.params;

        // Delete the behavior from the database based on the specified behavior ID
        await pool.query("DELETE FROM behaviours WHERE behaviours.bid = $1", [
            bid,
        ]);

        // Respond with a success status code and message
        res.json({ success: true });
    } catch (error) {
        console.error(error);
    }
};

// Export the functions for use in other parts of the application
module.exports = {
    getBehaviours,
    postBehaviour,
    updatedBehaviour,
    deleteBehaviour,
};
