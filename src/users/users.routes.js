const router = require('express').Router();
const userServices = require('./users.http');
const passport = require('passport');
require('../utils/auth')(passport);

router
    .route('/')
    .get(
        passport.authenticate('jwt', { session: false }),
        userServices.getAllUsers
    );
router.route('/me').get(
    passport.authenticate('jwt', { session: false }),

    userServices.getMyUserData
);
router
    .route('/:uuid')
    .get(
        passport.authenticate('jwt', { session: false }),
        userServices.getUserById
    )
    .put(
        passport.authenticate('jwt', { session: false }),
        userServices.updateUser
    )
    .delete(
        passport.authenticate('jwt', { session: false }),
        userServices.deleteUser
    );



module.exports = {
    router,
};
