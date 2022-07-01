const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../../app').app

chai.use(chaiHttp)
const email = 'sahid.kick@academlo.com'
const password = '123456'
const testUuid = '31992d09-8dd3-4fa4-8bc4-23b2b58e5fe0'

describe('Integration suite CONVERSATION endpoints test', () => {
    it('Should List Conversations with token STATUS 200', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: email,
                password: password
            })
            .end((err, res) => {
                const token = res.body.token;
                chai
                    .request(app)
                    .get('/api/v1/conversations')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })
    it('Should List Conversation from a specific UUID with token STATUS 200', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: email,
                password: password
            })
            .end((err, res) => {
                const token = res.body.token;
                chai
                    .request(app)
                    .get('/api/v1/conversations/' + testUuid)
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })
    it('Should List Participants from a specific UUID with token STATUS 200', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: email,
                password: password
            })
            .end((err, res) => {
                const token = res.body.token;
                chai
                    .request(app)
                    .get('/api/v1/conversations/' + testUuid + '/participants/')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })

})