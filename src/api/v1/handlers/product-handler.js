'use strict';

const repository = require('../../../infrastructure/repositories/product-repository');
const service = require('../../../infrastructure/services/discount-service');

const getAllProducts = async (userId) => {
    const products = await repository.getAllProducts();

    if (products != null && userId != undefined) {
        for (const product of products) {
            const discount = await service.getDiscount(product.id, userId);
            if (discount != undefined) {
                product.discount = {
                    pct: discount.pct,
                    value_in_cents: discount.value_in_cents
                };
            }
        }
    }

    return products;
}

module.exports = {
    getAllProducts
};