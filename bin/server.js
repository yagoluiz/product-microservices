'use strict';

const log = require('simple-node-logger').createSimpleLogger();

const app = require('../src/app');

const port = 3000;

app.listen(port, () => log.info(`API listening on port => ${port}`));