const pg       = require('pg-promise')({});

const pgConfig = {  host:     process.env.DB_HOST,
                    port:     process.env.DB_PORT,
                    database: process.env.DB_NAME,
                    user:     process.env.DB_USER,
                    secret:   process.env.JWT_SECRET,
                    password: process.env.DB_PASS };

const db       = pg(pgConfig);

module.exports = db;
