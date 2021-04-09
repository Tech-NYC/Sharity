exports.up = function (knex) {
  return knex.schema.createTable("organization_needs_list", (table) => {
    table.increments("id");
    table.integer("organization_id").notNullable();
    table.string("items_needed").notNullable();
    table.string("conditions_accepted").notNullable();
    table.string("conditions_not_accepted").notNullable();

    table.foreign("organization_id").onDelete("CASCADE").references("organizations.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("organization_needs_list");
};
