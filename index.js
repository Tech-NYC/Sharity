require("dotenv").config(); // Loads env files from .env into process.env
const path = require("path");
const express = require("express");
const app = express();
const db = require("./connection.js");
const cors = require('cors')
// serve static files
const assets = path.resolve(__dirname, "client", "build");
app.use(express.static(assets));
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
});

const userController = require("./controllers/userController.js");
const organizationController = require("./controllers/organizationController.js");
const organizationListController = require("./controllers/organization_needs_listController.js");
const donationRequestController = require("./controllers/donationRequestController.js");
const user = new userController();
const organization = new organizationController();
const organizationList = new organizationListController();
const donationRequest = new donationRequestController();

////////////////////////////////User Routes---------------------------------
app.get("/api/user/getAll", user.getAll);
app.get("/api/user/fetch_info", user.fetch_info);
app.get("/api/user/fetch_requests", user.fetch_requests);
app.post("/api/user/register", user.register);
app.post("/api/user/login", user.login);
app.delete("/api/user/delete", user.delete);

////////////////////////////////Organization Routes-------------------------
app.get("/api/organizations/list", organization.getAll);
app.get("/api/organizations/organization_info", organization.getOne);
app.post("/api/organization/create", organization.create);
app.get("/api/organization/fetch_info_by_org_id", organization.fetch_info_by_org_id);

////////////////////////////////Organization_needs_list Routes--------------
app.get("/api/organization/getAll", user.getAll);
app.get("/api/organization/organization_list", organizationList.list);
app.post("/api/organization_list/create", organizationList.create);

////////////////////////////////Donation Request Routes---------------------
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
