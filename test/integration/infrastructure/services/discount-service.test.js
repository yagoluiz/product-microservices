'use strict';

const service = require('../../../../src/infrastructure/services/discount-service');

test('should discount to be not undefined properties discount', async () => {
    const productId = 'a0f5e2f7-7d8e-4c7a-bc0e-7cb40d9af91a';
    const userId = '9a2aaed6-38f8-4f31-9a90-751f78543ae7';

    const discount = await service.getDiscount(productId, userId);

    const pct = discount.pct;
    const valueInCents = discount.value_in_cents;

    expect(pct).not.toBeUndefined();
    expect(valueInCents).not.toBeUndefined();
});

test('should discount to be properties required discount', async () => {
    const productId = 'a0f5e2f7-7d8e-4c7a-bc0e-7cb40d9af91a';
    const userId = '9a2aaed6-38f8-4f31-9a90-751f78543ae7';

    const discount = await service.getDiscount(productId, userId);

    const pct = discount.pct;
    const valueInCents = discount.value_in_cents;

    expect(pct).toBe(0);
    expect(valueInCents).toBe(0);
});