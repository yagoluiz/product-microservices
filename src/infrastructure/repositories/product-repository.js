'use strict';

const Pool = require('pg').Pool;
const config = require('../../config');

const pool = new Pool({
    host: config.store_database.host,
    port: config.store_database.port,
    user: config.store_database.user,
    database: config.store_database.database,
    password: config.store_database.password
});

const getAllProducts = async () => {
    const query = await pool.query('SELECT id, price_in_cents, title, description FROM public.product');
    return query.rows;
}

module.exports = {
    getAllProducts
};