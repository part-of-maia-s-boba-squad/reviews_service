// const Pool = require('pg').Pool;
const { Pool, Client } = require('pg');
const { credentials } = require('./postgres_credentials');

// const pool = new Pool();

const pool = new Pool({
    user: credentials.user,
    host: credentials.host,
    database: credentials.database,
    password: credentials.password,
    port: credentials.port
});

module.exports = { pool };