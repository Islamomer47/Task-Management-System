require("dotenv").config();
const { Pool } = require("pg");

// Function to encode the password
const encodePassword = (password) => {
  return encodeURIComponent(password);
};

const connectionString = `postgresql://${process.env.DB_USER}:${encodePassword(
  process.env.DB_PASSWORD
)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

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
