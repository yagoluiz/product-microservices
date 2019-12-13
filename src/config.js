module.exports = {
    store_database: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'store',
        password: 'admin'
    },
    discount_grpc: {
        host: process.env.DISCOUNT_HOST || 'localhost:5000'
    }
};