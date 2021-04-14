const db = require("../connection.js");

class donationRequestController {
  async create(request, response) {
    // TODO: Check if user_id exists in organizations table (may not be needed)
    try {
      await db.none(
        "INSERT INTO donation_requests (user_id,organization_id, location, items, time, date, status) VALUES (${user_id},${organization_id}, ${location}, ${items}, ${time}, ${date},${status})",
        request.body
      );

      // TODO: may need to edit the inclusion of request.body in response
      return response.status(200).send(`Successfully created donation request.`);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async setStatus(request, response) {
    try {
      await db.none("UPDATE donation_requests SET status = ${status} WHERE id = ${donation_request_id}", request.body);
      return response.status(200).send(`Successfully updated ${request.body.donation_request_id} to status ${request.body.status}`);
    } catch (err) {
      response.status(500).send(err);
    }
  }
}

module.exports = donationRequestController;
