'use strict';

const repository = require('../../../../src/infrastructure/repositories/product-repository');

test('should products to be not undefined properties required product', async () => {
    const products = await repository.getAllProducts();

    const id = products[0].id;
    const priceInCents = products[0].price_in_cents;
    const title = products[0].title;

    expect(id).not.toBeUndefined();
    expect(priceInCents).not.toBeUndefined();
    expect(title).not.toBeUndefined();
});

test('should products to equal properties required product', async () => {
    const products = await repository.getAllProducts();

    const id = products[0].id;
    const priceInCents = products[0].price_in_cents;
    const title = products[0].title;

    expect(id).toBe('a0f5e2f7-7d8e-4c7a-bc0e-7cb40d9af91a');
    expect(priceInCents).toBe(1000);
    expect(title).toBe('iPhone 11');
});