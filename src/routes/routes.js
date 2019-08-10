const express = require('express');

const DevController = require('../controllers/dev.controller');

const routes = express.Router();
const devController = new DevController();

routes.get('/', (req, res) => {
    res.json({
        method: 'get',
        endpoint: '/',
        ok: true
    });
});

routes.post('/devs', function(req, res) {
    devController.create(req, res);
});

// routes.put('/devs/:id', (req, res) => {
//     console.log('c');
// });

// routes.delete('/devs/:id', (req, res) => {
//     console.log('d');
// });

module.exports = routes;