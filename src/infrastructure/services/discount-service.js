'use strict';

const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const config = require('../../config');

const packageDefinition = protoLoader.loadSync(
    path.join(__dirname, '/../../protos/discount.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const proto = grpc.loadPackageDefinition(packageDefinition).discount;

const getDiscount = async (productId, userId) => {
    const request = {
        product_id: productId,
        user_id: userId
    };
    const client = new proto.DiscountService(process.env.DISCOUNT_HOST || config.discount_grpc.host, grpc.credentials.createInsecure());

    return new Promise(function (resolve, reject) {
        client.getDiscount(request, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
}

module.exports = {
    getDiscount
};