'use strict';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../../protos/discount.proto';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const discountProto = grpc.loadPackageDefinition(packageDefinition).discount;

const getDiscount = async (productId, userId) => {
    const request = {
        product_id: productId,
        user_id: userId
    };
    const client = new discountProto.DiscountService('localhost:5000', grpc.credentials.createInsecure());

    return new Promise(function (resolve, reject) {
        client.getDiscount(request, (_err, res) => {
            if (_err) {
                reject(_err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = {
    getDiscount
};