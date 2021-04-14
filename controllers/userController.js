const db = require("../connection.js");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
require("dotenv").config();
class userController {
  async register(request, response) {
    try {
      const hashedPass = await argon2.hash(request.body.password);
      request.body.password = hashedPass;

      await db.none(
        "INSERT INTO users (first_name, last_name, username, email,phone_number, password_hash, is_organization) VALUES (${first_name},${last_name}, ${username}, ${email},${phone_number}, ${password}, ${is_organization})",
        request.body
      );

      const token = jwt.sign({ username: request.body.username }, process.env.AUTH_KEY);

      return response.cookie("SharityToken", token).sendStatus(200);
    } catch (err) {
      console.log(err);
      response.status(500).json(err);
    }
  }

  async login(request, response) {
    try {
      const username = request.body.username;
      const password = request.body.password;

      const user = await db.one("SELECT * FROM users WHERE username = ${username}", request.body);
      console.log(user);

      if (!user) {
        return response.status(401).send("User does not exist.");
      }
      console.log(user.password, password);

      if (await argon2.verify(user.password_hash, password)) {
        // password match
        const token = jwt.sign({ username: username }, process.env.AUTH_KEY);
        response.cookie("SharityToken", token).status(200).send(user);
      } else {
        // password did not match
        return response.status(401).send("Invalid login credentials.");
      }
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async delete(request, response) {
    try {
      const deleteUser = parseInt(request.body.id);
      await db.none("DELETE FROM users WHERE id=$1", deleteUser);

      return response.send(`The following user id has been deleted: ${deleteUser}`);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  // Dependent on org or donater user -  the user accepts or initiates the donation requests
  async fetch_requests(request, response) {
    try {
      const user = parseInt(request.body.user_id);
      const data = await db.any("SELECT * FROM donation_requests WHERE user_id=$1", user);

      return response.send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  // async create_request(request, response) {
  //   try {
  //     const user = parseInt(request.body.user_id);
  //     const data = await db.any("SELECT * FROM donation_requests WHERE user_id=$1", user);

  //     return response.send(data);
  //   } catch (err) {
  //     response.status(500).send(err);
  //   }
  // }

  async fetch_info(request, response) {
    try {
      const user_id = parseInt(request.body.user_id);
      console.log(user_id);
      const data = await db.any("SELECT * FROM users WHERE id=$1", user_id);

      return response.send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  // // retrieve a userID based on the JWT Token
  // async get_userID(request, response) {
  //   try {
  //   } catch (err) {
  //     response.status(500).send(err);
  //   }
  // }
}

module.exports = userController;
