require("dotenv").config();
const { Pool } = require("pg");

// Use the POST_URL directly from the environment variable
const connectionString = process.env.POST_URL;

const pool = new Pool({
  connectionString: connectionString,
});

// Log connection status
pool
  .connect()
  .then(() => {
    console.log("Connected to the PostgreSQL database successfully!");
  })
  .catch((err) => {
    console.error("Connection to the PostgreSQL database failed:", err.stack);
  });

module.exports = pool;
