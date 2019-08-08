const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http')

const server = require('../src/server');

chai.use(chaiHttp);

describe('Testing the Server', () => {

    it('Testing the first get route', () => {
        chai.request(server).get('/').end((error, res) => {
            res.should.have.status(200);
        });
    });

    it('Testing the "/devs" post route', () => {
        chai.request(server).post('/devs').end((error, res) => {
            res.should.have.status(200);
        });
    });
});