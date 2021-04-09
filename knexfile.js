// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
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
