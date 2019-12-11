'use strict';

const repository = require('../../../../../src/infrastructure/repositories/product-repository');
const service = require('../../../../../src/infrastructure/services/discount-service');
const handler = require('../../../../../src/api/v1/handlers/product-handler');

test('should products to be not discount', async () => {
    const productsMock = [
        {
            id: '7f4507db-f549-4ddb-a216-440386a63e88',
            price_in_cents: 10,
            title: 'Title mock',
            description: 'Description mock'
        }
    ];
    const userIdMock = undefined;

    repository.getAllProducts = jest.fn().mockReturnValue(productsMock);

    const products = await handler.getAllProducts(userIdMock);

    expect(products.length).toBe(1);
});

test('should products to be discount', async () => {
    const productsMock = [
        {
            id: '7f4507db-f549-4ddb-a216-440386a63e88',
            price_in_cents: 1000,
            title: 'Title mock',
            description: 'Description mock',
            discount: {
                pct: 10,
                value_in_cents: 100
            }
        }
    ];
    const discountMock = {
        pct: 10,
        value_in_cents: 100
    };
    const userIdMock = 'd38e883d-6ee4-4d06-b9ed-8fc26f2a934d';

    repository.getAllProducts = jest.fn().mockReturnValue(productsMock);
    service.getDiscount = jest.fn().mockReturnValue(discountMock);

    const products = await handler.getAllProducts(userIdMock);

    expect(products.length).toBe(1);
    expect(products[0].discount).not.toBeUndefined();
});