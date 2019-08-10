const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/server');
const mongo = require('../src/database/mongo.class');

chai.use(chaiHttp);

const should = chai.should();

const db = new mongo();

let app = {};

describe('Testing the database', function() {
    it('Verify connection', async() => {
        const result = await db.isConnected();
        assert.deepEqual(result, 1);
    });
});