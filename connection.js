const pgPromise = require("pg-promise")();
require("dotenv").config();

const db = pgPromise({
  connectionString: process.env.DATABASE_URL,
});

module.exports = db;

// Creating production SSL conns to postgresDB
// https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js

// Generating and attaching certs to heroku app
//https://devcenter.heroku.com/articles/ssl-endpoint#acquire-ssl-certificate
