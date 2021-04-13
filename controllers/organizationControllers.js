const db = require("../connection.js");

class organizationController {
  async create(request, response) {
    // TODO: Check if user_id exists in organizations table (may not be needed)
    try {
      await db.none(
        "INSERT INTO organizations (user_id, name, address, description) VALUES (${user_id}, ${name}, ${address}, ${description})",
        request.body
      );

      // TODO: may need to edit the inclusion of request.body in response
      return response.status(200).send(`Successfully inserted ${request.body}`);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async getOne(request, response) {
    // uses organization id in request
    try {
      // TODO: Check if we need to access request params as opposed to request.body
      const organization = parseInt(request.body.user_id);
      const data = await db.one(
        "SELECT * FROM organizations WHERE user_id=$1",
        organization
      );

      return response.status(200).send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async getAll(request, response) {
    // uses db.many to return one or more records, method rejects if no records are returned
    // TODO:
    try {
      const data = await db.many("SELECT * FROM organizations");
      return response.status(200).send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }
}

module.exports = organizationController;