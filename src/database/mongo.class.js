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
        this.model = mongoose.model('Dev', devSchema);
    }

    devSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        user: {
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

    async isConnected() {
        const state = this.connection.readyState;

        if (state === 1) return state;
        if (state !== 2) return state;

        await new Promise(resolve => setTimeout(resolve, 1500));

        return this.connection.readyState;
    }

    getModel = () => this.model;
}

module.exports = MongoJS;