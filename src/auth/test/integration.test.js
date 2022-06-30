before(() => {
    registerUser({
        firstname: 'UserTest',
        lastname: 'LastNaemeTest',
        email: 'test@someone.com',
        password: '123456',
        phone: '123456789'
    })
})
after(() => {
    sequelize.query('DELETE FROM users WHERE email = \'sdsdsdddds\'')
})
describe('User', () => {
    it('should create a user', async () => {
        const user = await registerUser({
            firstname: 'UserTest',
            lastname: 'LastNaemeTest',
            email: 'test@satelital.com',
            password: '123456',
            phone: '123456789'
        })
        expect(user).to.be.an('object')
        expect(user.id).to.be.a('number')
        expect(user.firstname).to.be.a('string')
        expect(user.lastname).to.be.a('string')
        expect(user.email).to.be.a('string')
        expect(user.password).to.be.a('string')
        expect(user.phone).to.be.a('string')
        expect(user.createdAt).to.be.a('date')
        expect(user.updatedAt).to.be.a('date')
    })
})
