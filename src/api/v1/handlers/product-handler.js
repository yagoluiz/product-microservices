'use strict';

const log = require('simple-node-logger').createSimpleLogger();
const repository = require('../../../infrastructure/repositories/product-repository');
const service = require('../../../infrastructure/services/discount-service');

const getAllProducts = async (userId) => {
    const products = await repository.getAllProducts();

    if (products != null && userId != undefined) {
        const promises = products.map(async (product) => {
            const discount = await service.getDiscount(product.id, userId).catch((err) => log.error(`Discount service => ${err}`));
            if (discount != undefined) {
                product.discount = {
                    pct: discount.pct,
                    value_in_cents: discount.value_in_cents
                };
            }
        });

        await Promise.all(promises);
    }

    return products;
}

module.exports = {
    getAllProducts
};