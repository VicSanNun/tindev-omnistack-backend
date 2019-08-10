const mongoose = require('mongoose');

const developEnviroment = require('../../config');

class MongoJS {
    constructor() {
        this.connection = null;
        this.model = null;
        this._connect();
    }

    _connect() {
        mongoose.connect(`mongodb://${developEnviroment.user}:${developEnviroment.password}@${developEnviroment.host}:${developEnviroment.port}/${developEnviroment.db}`, { useNewUrlParser: true }, (error) => {
            if (!error) return;
            console.log('error', error);
        });

        this.connection = mongoose.connection;
        this.devSchema();
    }

    devSchema() {
        const developerSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true
            },
            bio: String,
            avatar: {
                type: String,
                required: true
            },
        }, {
            timestamps: true,
        });

        this.model = mongoose.model('Dev', developerSchema);
    }

    async isConnected() {
        const state = this.connection.readyState;

        if (state === 1) return state;
        if (state !== 2) return state;

        await new Promise(resolve => setTimeout(resolve, 1500));

        return this.connection.readyState;
    }

    async create(item) {
        return await this.model.create(item);
    }

    async read(id) {
        return await this.model.find(id);
    }

    async findOne(name) {
        return await this.model.findOne(name);
    }

}

module.exports = MongoJS;