const router = require('express').Router();
const conversationServices = require('./conversation.http');
const messageServices = require('../messages/message.http');
const participantsServices = require('../participants/participants.http');
const passport = require('passport');
require('../utils/auth')(passport);

router
    .route('/')
    .get(
        passport.authenticate('jwt', { session: false }),

        conversationServices.getAllCv
    )
    .post(
        passport.authenticate('jwt', { session: false }),
        
        conversationServices.addConversation
    );

router
    .route('/:uuid')
    .get(
        passport.authenticate('jwt', { session: false }),

        conversationServices.getCvById
    )
    .put(
        passport.authenticate('jwt', { session: false }),

        conversationServices.updateConversation
    )
    .delete(
        passport.authenticate('jwt', { session: false }),

        conversationServices.deleteCv
    );

router
    .route('/:uuid/messages')
    .get(
        passport.authenticate('jwt', { session: false }),

        messageServices.getAllMss
    )
    .post(
        passport.authenticate('jwt', { session: false }),

        messageServices.addMessage
    );

router
    .route('/:uuid/participants')
    .get(
        passport.authenticate('jwt', { session: false }),
        // ,
        participantsServices.getAll
    )
    .post(
        passport.authenticate('jwt', { session: false }),
        // ,
        participantsServices.addParticipant
    );

module.exports = {
    router,
};
