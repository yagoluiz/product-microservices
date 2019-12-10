'use strict';

const express = require('express');
const handler = require('../handlers/product-handler');

const router = express.Router();

router.get('/', handler.getAllProducts);

module.exports = router;