import Knex from 'knex';


export async function up(knex: Knex){
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('tittle').notNullable();
        table.string('category').notNullable();
        table.string('image', 1000).notNullable();
        table.integer('price').notNullable();
        table.integer('amount').notNullable();
      });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}

