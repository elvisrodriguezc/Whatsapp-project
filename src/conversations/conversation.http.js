const conversationControllers = require('./conversation.controller')
const { toPromise } = require('../utils/toPromise');

const addConversation = async (req, res) => {
    
    const [user, err] = await toPromise(
        conversationControllers.postConversation(
            req.body.title,
            req.user.id
        )
    );
    if (err || !req.body) {
        res.status(400).json({ message: 'Data Missing' });
    }
    res.status(201).json({ user });
};

const getAllCv = async (req, res) => {
    //!cambiar por authAdmin en dado caso
    const user = await toPromise(conversationControllers.getAllConversations());
    res.status(200).json(user);
};

const getCvById = async (req, res) => {
    const id = req.params.uuid;
    const [users, error] = await toPromise(
        conversationControllers.getConversationsById(id)
    );
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json(users);
};


const updateConversation = async (req, res) => {
    const id = req.params.uuid;
    const data = req.body
    const [conversation, error] = await toPromise(
        conversationControllers.putConversation(id, data)
    );
    if (error || !conversation) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ conversation, message: 'all good' });
};

const deleteCv = async (req, res) => {
    const id = req.params.uuid;
    const [users, error] = await toPromise(
        conversationControllers.deleteConversation(id)
    );
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(204).json({ message: 'all good' });
};

module.exports = {
    addConversation,
    updateConversation,
    deleteCv,
    getAllCv,
    getCvById,
};
