'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    const info = {
        title: "Product API",
        version: "1.0.0"
    };
    res.status(200).send(info);
});

module.exports = router;