const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../../app').app

chai.use(chaiHttp)
const email = 'sahid.kick@academlo.com'
const password = '123456'
const testUuid = 'fa48c86e-6608-4fd0-a4bc-520add862f9c'


describe('Integration suite AUTH endpoints test', () => {
    it("Should return the AUTHORIZATION with a token for response STATUS 200", (done) => {
        chai
            .request(app)
            .post("/api/v1/auth/login")
            .set("content-type", "application/json")
            .send({ email: email, password: password })
            .end((err, res) => {
                const token = res.body.token;
                chai.assert.equal(res.status, 200);
                done();
            });
    });
})
