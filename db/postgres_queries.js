const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'albungay',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432
});

module.exports = { pool };