'use strict';

const repository = require('../../../infrastructure/repositories/product-repository');
const service = require('../../../infrastructure/services/discount-service');

const getAllProducts = async (req, res) => {
    const userId = req.headers['x-user-id'];
    const products = await repository.getAllProducts();

    if (products != null && userId != undefined) {
        for (const product of products) {
            const productId = product.id;
            const discount = await service.getDiscount(productId, userId);
            if (discount != undefined) {
                product.discount = {
                    pct: discount.pct,
                    value_in_cents: discount.value_in_cents
                };
            }
        }
    }

    res.status(200).send(products);
}

module.exports = {
    getAllProducts
};