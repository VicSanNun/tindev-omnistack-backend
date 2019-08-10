const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

//mongoose.connect();

server.use(routes);

server.listen(3333);

module.exports = server;