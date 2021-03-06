const express = require('express');
const cors = require('cors');

const mongo = require('./database/mongo.class');
const routes = require('./routes/routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(5000);

module.exports = server;