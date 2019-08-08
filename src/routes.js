const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        method: 'get',
        endpoint: '/',
        ok: true
    });
});

routes.post('/devs', (req, res) => {
    return res.json({
        method: 'post',
        endpoint: '/devs',
        ok: true
    });
});

module.exports = routes;