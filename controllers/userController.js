const db = require("../connection.js");

class userController {
  async create(request, response) {
    try {
      await db.none(
        "INSERT INTO users (first_name, last_name, username, email,phone_number, password_hash, is_organization) VALUES (${first_name},${last_name}, ${username}, ${email},${phone_number}, ${password_hash}, ${is_organization})",
        request.body
      );

      return response.send(`The following user has been created: ${request.body.username}`);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async delete(request, response) {
    try {
      const deleteUser = parseInt(request.params.id);
      await db.none("DELETE FROM users WHERE id=$1", deleteUser);

      return response.send(`The following user id has been deleted: ${deleteUser}`);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  // Dependent on org or donater user -  the user accepts or initiates the donation requests
  async fetch_requests(request, response) {
    try {
      const user = parseInt(request.params.id);
      const data = await db.any("SELECT * FROM donation_requests WHERE user_id=$1", user);

      return response.send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async fetch_info() {
    try {
      const user = parseInt(request.params.id);
      const data = await db.any("SELECT * FROM users WHERE user_id=$1", user);

      return response.send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }
}

module.exports = userController;
