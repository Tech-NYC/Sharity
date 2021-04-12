exports.up = function (knex) {
  return knex.schema.createTable("organizations", (table) => {
    table.increments("id");
    table.integer("user_id").notNullable();
    table.string("name").notNullable();
    table.string("pickup_times").notNullable();
    table.string("address").notNullable();
    table.string("description").notNullable();

    table.foreign("user_id").onDelete("CASCADE").references("users.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("organizations");
};
