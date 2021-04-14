require("dotenv").config(); // Loads env files from .env into process.env
const path = require("path");
const express = require("express");
const app = express();
const db = require("./connection.js");
const cors = require("cors")
// serve static files
const assets = path.resolve(__dirname, "client", "build");

app.use(cors());
app.use(express.urlencoded())
app.use(express.static(assets));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});

const userController = require("./controllers/userController.js");
const organizationController = require("./controllers/organizationControllers.js");
const donationRequestController = require("./controllers/donationRequestController.js");
const user = new userController();
const organization = new organizationController();
const donationRequest = new donationRequestController();

////////////////////////////////User Routes---------------------------------
app.get("/api/user/fetch_info", user.fetch_info);
app.get("/api/user/fetch_requests", user.fetch_requests);
app.post("/api/user/register", user.register);
app.delete("/api/user/delete", user.delete);

app.get("/api/organizations/list", organization.getAll);
app.get("/api/organizations/organization_info", organization.getOne);
app.post("/api/organization/create", organization.create);

app.post("/api/donationRequest/create", donationRequest.create);
app.patch("/api/donationRequest/setStatus", donationRequest.setStatus);

// define fallback route
// path.resolve prepends subsequent paths until absolute path is constructed
app.get("*", async (req, res) => {
  console.log("wildcard hit");
  console.log("dir", __dirname);
  const indexHtml = path.resolve(__dirname, "client", "build/index.html");
  res.sendFile(indexHtml);
});
