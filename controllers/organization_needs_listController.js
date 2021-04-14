const db = require("../connection.js");

class organization_needs_listController {
  //TODO: Organization can only have one list
  async create(request, response) {
    try {
      await db.none(
        "INSERT INTO organization_needs_list (organization_id, items_needed, conditions_accepted, conditions_not_accepted) VALUES(${organization_id}, ${items_needed}, ${conditions_accepted}, ${conditions_not_accepted})",
        request.body
      );

      return response
        .status(200)
        .send(
          `Successfully insterted data for ${request.body.organization_id}`
        );
    } catch (err) {
      console.log(err)
      response.status(500).send(err);
    }
  }

  async list(request, response) {
    try {
      const organization = parseInt(request.body.organization_id)
      
      const data = await db.one("SELECT * FROM organization_needs_list WHERE organization_id=$1", organization);
      console.log('data', data)
      return response.status(200).send(data)
    } catch (err) {
      return response.status(500).send(err)
    }
  }
}

module.exports = organization_needs_listController;