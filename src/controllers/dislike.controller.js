const DevController = require('./dev.controller');
const dev = new DevController();


class DislikeController {
    async create(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await dev.findById(user);
        const targetDev = await dev.findById(devId);

        if (!targetDev) return res.status(400).json({ error: 'Dev not exists' });

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}

module.exports = DislikeController;