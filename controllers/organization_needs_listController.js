const db = require("../connection.js");

class organization_needs_listController {
  //TODO: Organization can only have one list
  async create(request, response) {
    try {
      await db.none(
        "INSERT INTO organization_needs_list (organization_id, items_needed, conditions_accepted, conditions_not_accepted) VALUES(${organization_id}, ${items_needed}, ${conditions_accepted}, ${conditions_not_accepted})",
        request.body
      );

      return response.status(200).send(`Successfully insterted data for ${request.body.organization_id}`);
    } catch (err) {
      console.log(err);
      response.status(500).send(err);
    }
  }

  async getAll(request, response) {
    // uses db.many to return one or more records, method rejects if no records are returned
    // TODO:
    try {
      const data = await db.many("SELECT * FROM organization_needs_list");
      return response.status(200).send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }

  async list(request, response) {
    try {
      const organization = parseInt(request.body.organization_id);

      const data = await db.one("SELECT * FROM organization_needs_list WHERE organization_id=$1", organization);
      console.log("data", data);
      return response.status(200).send(data);
    } catch (err) {
      return response.status(500).send(err);
    }
  }

  async update_list(request, response) {
    try {
      const data = await db.any("UPDATE organization_needs_list SET conditions_accepted=$(accepted), conditions_not_accepted=$(notaccepted), items_needed=$(needed) WHERE organization_id=$(organization_id)", request.body)
      console.log('d', data)
      return response.status(200)      
    } catch (err) {
      console.log('err', err)
      return response.status(500).send(err)
    }
  }
}

module.exports = organization_needs_listController;
