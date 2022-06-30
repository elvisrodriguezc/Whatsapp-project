const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');
const models = initModels(sequelize);
const uuid = require('uuid');

const getAllConversations = async () => {
    const users = await models.conversations.findAll();
    return users;
};

const getConversationsById = async (id) => {
    const user = await models.conversations.findByPk(id);
    return user;
};

const postConversation = async (title, createdBy) => {
    const conversationId = uuid.v4();
    const newConversation = await models.conversations.create({
        id: conversationId,
        title: title,
        created_by: createdBy,
    });
    return {
        message: `Converastion created succesfully with the id: ${conversationId}`,
        user: newConversation,
    };
};

const putConversation = async (id, data) => {
    const user = await models.conversations.update(data, {
        where: {
            id,
        },
    });
    return {
        message: `Users with id: ${id} eddited succesfully.`,
        user: user,
    };
};

const deleteConversation = async (id) => {
    const user = await models.conversations.destroy({
        where: {
            id,
        },
    });
    return {
        message: `User with id: ${id} deleted succesfully.`,
        user,
    };
};

const getConversationData = async (id) => {
    const conversation = await models.conversations.findOne({
        where: { id },
        include: [
            {
                model: models.message,
                as: 'message',
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
    getAllConversations,
    getConversationsById,
    postConversation,
    deleteConversation,
    putConversation,
    getConversationData,
};