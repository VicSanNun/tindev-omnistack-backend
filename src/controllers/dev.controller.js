const axios = require('axios');
const mongo = require('../database/mongo.class');

const db = new mongo();
class DevController {

    async create(req, res) {
        const { username } = req.body;

        const userExists = await db.findOne({ username });

        if (userExists) return res.json(userExists);

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url } = response.data;

        this.result_create = await db.create({
            name,
            username,
            bio,
            avatar: avatar_url
        });

        return res.json(this.result_create);
    }

    async findById(id) {
        return await db.read(id);
    }

    async listAll(req, res) {
        const { user } = req.headers;

        const loggedUser = await db.read(user);

        const result = await db.findAll({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ]
        });

        return res.json(result);
    }
}

module.exports = DevController;