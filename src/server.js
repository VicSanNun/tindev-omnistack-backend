const express = require('express');

const mongo = require('./database/mongo.class');
const routes = require('./routes/routes');

const server = express();
const database = new mongo();

server.use(routes);

server.listen(5000);

module.exports = server;