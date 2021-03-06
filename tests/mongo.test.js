const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const mongo = require('../src/database/mongo.class');

chai.use(chaiHttp);

const should = chai.should();

const database = new mongo();

let app = {};

describe('Testing the database', function() {
    it('Verify connection', async() => {
        const result = await database.isConnected();
        assert.deepEqual(result, 1);
    });
});