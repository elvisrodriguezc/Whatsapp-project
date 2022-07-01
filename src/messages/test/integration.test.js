const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../../app').app

chai.use(chaiHttp)

before(() => {
    console.log('before')
})

describe('Integration suite USER endpoints test', () => {
    it('It should get 401 unauthorized response if token is not sent with request', (done) => {
        chai
            .request(app)
            .get('/api/v1/users')
            .set('content-type', 'application/json')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 401)
                done();
            })
    })
    it('Should List Users with token STATUS 200', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: "sahid.kick@academlo.com",
                password: "123456"
            })
            .end((err, res) => {
                const token = res.body.token;
                chai
                    .request(app)
                    .get('/api/v1/users')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })
    it('It should show Current User with token, Status 200', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: "sahid.kick@academlo.com",
                password: "123456"
            })
            .end((err, res) => {
                const token = res.body.token;
                chai
                    .request(app)
                    .get('/api/v1/users/me')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })
    it('Should get data user with UUID fa48c86e-6608-4fd0-a4bc-520add862f9c', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: "sahid.kick@academlo.com",
                password: "123456"
            })
            .end((err, res) => {
                const token = res.body.token;
                chai.request(app)
                    .get('/api/v1/users/fa48c86e-6608-4fd0-a4bc-520add862f9c')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        console.log(res.body)
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    });
            });
    })
    it('Should get data user with UUID', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: "sahid.kick@academlo.com",
                password: "123456"
            })
            .end((err, res) => {
                const token = res.body.token;
                chai.request(app)
                    .get('/api/v1/users/fa48c86e-6608-4fd0-a4bc-520add862f9c')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        console.log(res.body)
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    });
            });
    })
})