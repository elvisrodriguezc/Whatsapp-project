const messageControllers = require('./message.controller');
const { toPromise } = require('../utils/toPromise');

const addMessage = async (req, res) => {
    const conversation_id = req.params.uuid
    const [user, err] = await toPromise(
        messageControllers.postMessages(req.body.message, conversation_id, req.user.id)
    );
    if (err || !req.body) {
        res.status(400).json({ message: 'Data Missing' });
    }
    res.status(201).json(user);
};

const getAllMss = async (req, res) => {
    //!cambiar por authAdmin en dado caso
    const id = req.params.uuid
    const user = await toPromise(messageControllers.getAllMessages(id));
    res.status(200).json(user);
};

module.exports = {
    addMessage,
    getAllMss
}