// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 20,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
  },
};
