// const assert = require('assert');
// // const chai = require('chai');
// // const chaiHttp = require('chai-http')

// const server = require('../src/server');

// //chai.use(chaiHttp);

// let app = {};

// describe('Testing the Server', function() {
//     this.beforeAll(async() => {
//         app = await server;
//     });

//     it('Testing the first get route', async() => {
//         const result = await app.inject({
//             method: 'GET',
//             url: '/'
//         });
//         const sttsCode = result.statusCode;
//         assert.deepEqual(sttsCode, 200);
//     });

//     // it('Testing the "/devs" post route', () => {
//     //     chai.request(server).post('/devs').end((error, res) => {
//     //         res.should.have.status(200);

//     //     });
//     // });
// });