'use strict';

const handler = require('../handlers/product-handler');

const getAllProducts = async (req, res) => {
    const userId = req.headers['x-user-id'];
    const products = await handler.getAllProducts(userId);

    res.status(200).send(products);
}

module.exports = {
    getAllProducts
};