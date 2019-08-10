const express = require('express');

const DevController = require('../controllers/dev.controller');
const LikeController = require('../controllers/like.controller');
const DislikeController = require('../controllers/dislike.controller');

const routes = express.Router();

const devController = new DevController();
const likeController = new LikeController();
const dislikeController = new DislikeController()

routes.get('/', function(req, res) {
    devController.listAll(req, res);
});
routes.post('/devs', function(req, res) {
    devController.create(req, res);
});
routes.post('/devs/:devId/likes', function(req, res) {
    likeController.create(req, res);
});
routes.post('/devs/:devId/dislikes', function(req, res) {
    dislikeController.create(req, res);
});

// routes.put('/devs/:id', (req, res) => {
//     console.log('c');
// });

// routes.delete('/devs/:id', (req, res) => {
//     console.log('d');
// });

module.exports = routes;