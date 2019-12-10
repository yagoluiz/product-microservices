'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const indexRoute = require('./api/v1/routes/index-route');
const productRoute = require('./api/v1/routes/product-route');

app.use('/', indexRoute);
app.use('/api/v1/products/', productRoute);

module.exports = app;