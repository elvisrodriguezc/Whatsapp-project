const router = require('express').Router();
const authServices = require('./auth.http');

router.route('/signin').post(authServices.addUser);
router.route('/login').post(authServices.loginUser);

module.exports = {
    router
};
