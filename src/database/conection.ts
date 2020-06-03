import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host : '192.168.0.105:3306',
        user : 'root',
        password : '',
        database : 'node'
    },
});

export default connection;