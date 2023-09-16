// Import the required library for creating a PostgreSQL connection pool
const { Pool } = require('pg');

// Import the dotenv library to load environment variables
require('dotenv').config();

// Create a new PostgreSQL connection pool with configuration options
const pool = new Pool({
    user: 'postgres',                 // PostgreSQL username
    password: process.env.PASSWORD,   // Password retrieved from environment variables
    host: process.env.HOST,           // Database host retrieved from environment variables
    port: process.env.DB_PORT,        // Database port retrieved from environment variables
    database: 'organize'              // Database name
});

// Export the pool to be used in other parts of the application
module.exports = pool;
