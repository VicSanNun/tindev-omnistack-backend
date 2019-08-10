 const DevController = require('./dev.controller');
 const dev = new DevController();


 class LikeController {
     async create(req, res) {
         const { devId } = req.params;
         const { user } = req.headers;

         const loggedDev = await dev.findById(user);
         const targetDev = await dev.findById(devId);

         if (!targetDev) return res.status(400).json({ error: 'Dev not exists' });

         if (targetDev.likes.includes(loggedDev._id)) {
             console.log('Deu Match !');
         }

         loggedDev.likes.push(targetDev._id);

         await loggedDev.save();

         return res.json(loggedDev);
     }
 }

 module.exports = LikeController;