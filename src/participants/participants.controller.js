const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');
const models = initModels(sequelize);
const uuid = require('uuid');

const postParticipants = async (data) => {
    const userId = uuid.v4();
    const newParticipants = await models.participants.create({
        id: userId,
        conversation_id: data.conversation_id,
        user_id: data.user_id
    });
    return {
        message: `Participant added succesfully with the id: ${userId}`,
        user: newParticipants,
    };
};

const getAllParticipants = async (conversation_id) => {
    const participants = await models.participants.findAll({
        where: {
            conversation_id,
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    });
    return participants;
};

const getConversationInfo = async (id) => {
    const conversation = await models.conversations.findOne({
        where: { id },
        include: [
            {
                model: models.participants,
                as: 'participants',
                include: [
                    {
                        model: models.users,
                        as: 'user',
                        attributes: {
                            exclude: ['password'],
                        },
                    },
                ],
            },
        ],
    });
    return conversation;
};

module.exports = {
    postParticipants,
    getAllParticipants,
    getConversationInfo,
};
