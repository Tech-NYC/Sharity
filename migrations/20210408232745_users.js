exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone_number").notNullable();
    table.string("username").notNullable().unique();
    table.string("password_hash").notNullable();
    table.boolean("is_organization").notNullable();
    table.string("avatar").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
