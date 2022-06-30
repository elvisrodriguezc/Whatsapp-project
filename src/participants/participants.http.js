const { toPromise } = require('../utils/toPromise');
const participantsControllers = require('./participants.controller');

const addParticipant = async (req, res) => {
    const [user, err] = await toPromise(
        participantsControllers.postParticipants(req.body)
    );
    if (err || !req.body) {
        res.status(400).json({ message: 'Data Missing' });
    }
    res.status(201).json(user);
};

const getAll = async (req, res) => {
    const [data, err] = await toPromise(
        participantsControllers.getAllParticipants(req.params.uuid)
    );
    if (!err || data) {

        res.status(200).json(data);
    } else {
        res.status(400).json({
            message: 'error, no se de que, pero es un error',
        });
    }
};

const getConversationInfo = async (req, res) => {
    const [data, err] = await toPromise(
        participantsControllers.getConversationInfo(req.params.uuid)
    );
    if (!err || data) {
        
        res.status(200).json(data);
    } else {
        res.status(400).json({
            message: 'error, no se de que, pero es un error',
        });
    }
};

module.exports = {
    addParticipant,
    getAll,
    getConversationInfo,
};
