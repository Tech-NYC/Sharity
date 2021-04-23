const db = require("../connection.js");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
require("dotenv").config();
class userController {
  async register(request, response) {
    try {
      const hashedPass = await argon2.hash(request.body.password);
      request.body.password = hashedPass;

      // console.log("Registering", request.body.username, request.body.is_organization);

      await db.none(
        "INSERT INTO users (first_name, last_name, username, email,phone_number, password_hash, is_organization) VALUES (${first_name},${last_name}, ${username}, ${email},${phone_number}, ${password}, ${is_organization})",
        request.body
      );

      let user = {};
      let org = {};
      if (request.body.is_organization) {
        user = await db.one("SELECT * FROM users WHERE username = $(username)", request.body);
        request.body.user_id = user.id;
        await db.none("INSERT INTO organizations (user_id, name, address) VALUES (${user_id},${name},${address})", request.body);
        org = await db.one("SELECT * FROM organizations WHERE user_id=$(user_id)", request.body);

        const data = await db.any("INSERT INTO organization_needs_list (organization_id, items_needed, conditions_accepted, conditions_not_accepted) VALUES ($(id),' ',' ',' ')", org);
      }
      const token = jwt.sign({ username: request.body.username }, process.env.AUTH_KEY);

      return response
        .cookie("SharityToken", token)
        .status(200)
        .send({ ...org, ...user, organization_id: org.id });
    } catch (err) {
      console.log(err);
      response.status(500).json(err);
    }
  }

  async login(request, response) {
    try {
      const username = request.body.username;
      const password = request.body.password;

      const user = await db.one("SELECT * FROM users WHERE username = $(username)", request.body);
      request.body.user_id = user.id;
      let userData = user;

      if (user.is_organization) {
        const org = await db.one("SELECT * FROM organizations WHERE user_id = $(user_id)", request.body);
        userData = { ...org, ...user, organization_id: org.id };
        console.log(userData);
      }

      if (!user) {
        return response.status(401).send("User does not exist.");
      }

      if (await argon2.verify(user.password_hash, password)) {
        // password match
        const token = jwt.sign({ username: username }, process.env.AUTH_KEY);
        response.cookie("SharityToken", token).status(200).send(userData);
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
      return response.status(500).send(err);
    }
  }

  // Dependent on org or donater user -  the user accepts or initiates the donation requests
  async fetch_requests(request, response) {
    try {
      console.log("fetching donations associated with user");
      const data = await db.any(

        "SELECT donation_requests.id AS request_id, date, organizations.name AS name, time, location,items, status FROM donation_requests INNER JOIN organizations ON donation_requests.organization_id = organizations.id WHERE donation_requests.user_id =$(id)",

        request.body
      );

      return response.status(200).send(data);
    } catch (err) {
      console.log(err);
      return response.status(500).send(err);
    }
  }

  async fetchByToken(request, response) {
    try {
      console.log("fetching by token");
      const token = jwt.verify(request.body.token.slice(13), process.env.AUTH_KEY);
      console.log("token:", token);
      request.body.username = token.username;

      const user = await db.one("SELECT * FROM users WHERE username = $(username)", request.body);
      console.log(user);
      if (!user) {
        return response.status(401).send("User does not exist.");
      }

      let userData = user;

      if (user.is_organization) {
        request.body.user_id = user.id;
        const org = await db.one("SELECT * FROM organizations WHERE user_id = $(user_id)", request.body);
        userData = { ...org, ...user, organization_id: org.id };
        console.log(userData);
      }

      response.status(200).send(userData);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async fetch_info(request, response) {
    try {
      const user_id = parseInt(request.body.user_id);
      console.log(user_id);
      const data = await db.any("SELECT * FROM users WHERE id=$1", user_id);

      return response.status(200).send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async getAll(request, response) {
    // uses db.many to return one or more records, method rejects if no records are returned
    // TODO:
    try {
      const data = await db.many("SELECT id, first_name, last_name, email, phone_number, username, is_organization, avatar FROM users");
      return response.status(200).send(data);
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
