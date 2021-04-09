const pgPromise = require("pg-promise")();

const db = pgPromise({
  connectionString: process.env.DATABASE_URL,
});

module.exports = db;
// Creating production SSL conns to postgresDB
// https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js
