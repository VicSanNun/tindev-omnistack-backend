const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('a');
    res.json({
        method: 'get',
        endpoint: '/',
        ok: true
    });
});

routes.post('/devs', (req, res) => {
    console.log('b');
    res.json({
        method: 'post',
        endpoint: '/devs',
        ok: true
    });
});

// routes.put('/devs/:id', (req, res) => {
//     console.log('c');
// });

// routes.delete('/devs/:id', (req, res) => {
//     console.log('d');
// });

module.exports = routes;