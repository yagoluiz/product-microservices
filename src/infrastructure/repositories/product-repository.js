'use strict';

const Pool = require('pg').Pool;
const config = require('../../config');

const pool = new Pool({
    host: config.host,
    port: config.port,
    user: config.user,
    database: config.database,
    password: config.password
});

const getAllProducts = async () => {
    const query = await pool.query('SELECT id, price_in_cents, title, description FROM public.product');
    return query.rows;
}

module.exports = {
    getAllProducts
};