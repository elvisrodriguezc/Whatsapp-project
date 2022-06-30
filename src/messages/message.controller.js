const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');
const models = initModels(sequelize);
const uuid = require('uuid');

const getAllMessages = async (id) => {
    const users = await models.conversations.findOne({
        where: { id },
        include: [
            {
                model: models.message,
                as: 'messages',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    {
                        model: models.users,
                        as: 'sender',
                        attributes: {
                            exclude: ['password', 'createdAt', 'updatedAt']
                        },
                    },
                ],
            },
        ],
    });

    return users;
};

const postMessages = async (data, consersation_id, userId) => {
    const message_id = uuid.v4();
    const newMessages = await models.message.create({
        id: message_id,
        message: data,
        consersation_id,
        sender_id: userId,
    });
    return {
        message: `Messages created succesfully with the id: ${message_id}`,
        user: newMessages,
    };
};

module.exports = {
    getAllMessages,
    postMessages,
};
