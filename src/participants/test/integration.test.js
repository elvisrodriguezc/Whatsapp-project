const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../../app').app

chai.use(chaiHttp)
const email = 'sahid.kick@academlo.com'
const password = '123456'
const testUuid = 'fa48c86e-6608-4fd0-a4bc-520add862f9c'

describe('Integration suite PARTICIPANTS endpoints test', () => {
    it('Should get list of Participants, from one USER_ID Status 200', (done) => {
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
                    .get('/api/v1/participants/' + testUuid + '/participants')
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })
    it('Should get list of Participants, from one USER_ID Status 200', (done) => {
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
                    .get('/api/v1/participants/' + testUuid)
                    .set('content-type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200)
                        done();
                    })
            })
    })
})