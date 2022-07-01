const { describe } = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

// importamos toda nuestra aplicacion que esta almacenada en nuestro app
const app = require("../../app").app;

// nosotros estaremos utilizando chai-http para poder generar
// peticiones que nos testeen nuestras apis
chai.use(chaiHttp);

describe("Suite de test e2e de usuarios", () => {
    it("Should return the TOKEN STATUS 200", (done) => {
        chai
            .request(app)
            .post("/api/v1/auth/login")
            .set("content-type", "application/json")
            .send({ email: "sahid.kick@academlo.com", password: "123456" })
            .end((err, res) => {
                const token = res.body.token;
                chai.assert.equal(res.status, 200);
                done();
            });
    });
});