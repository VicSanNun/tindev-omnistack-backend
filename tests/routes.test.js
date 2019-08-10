const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/server');

chai.use(chaiHttp);

const should = chai.should();

let app = {};

describe('Testing the routes', function() {

    it('Testing the "/" get route', () => {
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