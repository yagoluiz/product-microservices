
const request = require('supertest');
const app = require('../../../../../src/app');

test('should get a products', async () => {
    const res = await request(app)
        .get('/api/v1/products')
        .send();

    expect(res.statusCode).toEqual(200);
});