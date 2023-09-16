// Import required libraries and modules
const pool = require('../db'); // Database connection pool
const bcrypt = require('bcryptjs'); // Library for password hashing
const jwt = require('jsonwebtoken'); // Library for JSON Web Tokens (JWT)

// Function for user signup
const signup = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Generate a salt and hash the password using bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Insert the user's email and hashed password into the database
        await pool.query("INSERT INTO users(email, password) VALUES ($1, $2)", [email, hashedPassword]);

        // Create a JWT token with the user's email as payload and set expiration
        const token = jwt.sign({ email }, 'secret', { expiresIn: '2hr' });

        // Respond with the user's email and the generated token
        res.json({ email, token });

    } catch (error) {
        console.error(error);
        // Handle errors and respond with an error message if necessary
        res.json({ error: 'Account with this email already exists!' });
    }
}

// Function for user login
const login = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Generate a salt and hash the provided password for comparison
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Retrieve user data from the database based on the provided email
        const users = await pool.query("SELECT * FROM users WHERE users.email = $1", [email]);

        // Check if a user with the provided email exists
        if (!users.rows.length) {
            return res.json({ error: "User doesn't exist" });
        }

        // Compare the provided password with the stored hashed password
        const success = await bcrypt.compare(password, users.rows[0].password);

        // If the password matches, create a JWT token
        const token = jwt.sign({ email }, 'secret', { expiresIn: '2hr' });

        if (success) {
            // Respond with the user's email and the generated token if authentication is successful
            res.json({ email: users.rows[0].email, token });
        } else {
            // Respond with an error message if authentication fails
            res.json({ error: 'Authentication Failed!' });
        }

    } catch (error) {
        console.error(error);
        // Handle errors and respond with an error message if necessary
        res.json(error);
    }
}

// Export the signup and login functions
module.exports = {
    signup,
    login
};
