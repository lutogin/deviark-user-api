const express = require('express');
const applyMiddleware = require('./middlewares');

const app = express();

applyMiddleware(app);

module.exports = app;
