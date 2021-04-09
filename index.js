const path = require("path");
const express = require("express");
const app = express();
const db = require("./connection.js");
require("dotenv").config(); // Loads env files from .env into process.env

// serve static files
const assets = path.resolve(__dirname, "client", "build");
app.use(express.static(assets));

const PORT = process.env.PORT || 3000;

app.get("/task", (req, res) => {
  res.send("hello world");
});

app.get("/dbConnectionTest", async (req, res) => {
  try {
    const data = await db.any("SELECT * FROM donation_requests");
    res.send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// define fallback route
// path.resolve prepends subsequent paths until absolute path is constructed
app.get("*", (req, res) => {
  console.log("dir", __dirname);
  const indexHtml = path.resolve(__dirname, "client", "build/index.html");
  res.sendFile(indexHtml);
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});
