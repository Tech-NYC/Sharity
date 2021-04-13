exports.up = function (knex) {
  return knex.schema.createTable("donation_requests", (table) => {
    table.increments("id");
    table.integer("user_id").notNullable();
    table.integer("organization_id").notNullable();
    table.string("location").notNullable();
    table.string("items").notNullable();
    table.timestamp("time").notNullable().defaultTo(knex.fn.now());
    table.date("date").notNullable().defaultTo(knex.fn.now());
    table.integer("status").notNullable();

    table.foreign("user_id").onDelete("CASCADE").references("users.id");
    table.foreign("organization_id").onDelete("CASCADE").references("organizations.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("donation_requests");
};
