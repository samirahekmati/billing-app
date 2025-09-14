import pkg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file into process.env
dotenv.config() 

// Destructure Pool class from pg module
const { Pool } = pkg;

// Create a new connection pool
// Pool allows multiple queries to reuse connections efficiently
const pool = new Pool({
    user: process.env.PGUSER,       // Database username
    host: process.env.PGHOST,       // Database host (usually localhost)
    database: process.env.PGDATABASE, // Database name
    password: process.env.PGPASSWORD, // User password
    port: Number(process.env.PGPORT) || 5432, // Database port, default 5432
})


// Event listener: fired when a new client connects to the database
pool.on("connect", () => {
    console.log("Connected to PostgreSQL database");
  });

// Event listener: fired if a client in the pool encounters an error
pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1); // Exit the app if there is a fatal error
  });
  
  // Export the pool so it can be imported in routes/controllers
  export default pool;