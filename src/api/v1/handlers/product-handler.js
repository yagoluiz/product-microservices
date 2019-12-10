'use strict'

const repository = require('../../../infrastructure/repositories/product-repository');

const getAllProducts = async (_req, res) => {
    const products = await repository.getAllProducts();
    res.status(200).send(products);
}

module.exports = {
    getAllProducts
}