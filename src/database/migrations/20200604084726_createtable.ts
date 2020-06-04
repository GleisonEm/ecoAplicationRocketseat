import Knex from 'knex';

exports.up = function(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
      });
};

exports.down = function(knex: Knex) {
    return knex.schema.dropTable('users');
};
