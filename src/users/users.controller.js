const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');
const uuid = require('uuid');
const crypto = require('../utils/crypto');
const models = initModels(sequelize);

const registerUser = async (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const user_id = uuid.v4();
    const newUser = await models.users.create({
        id: user_id,
        ...data,
        password: hashedPassword
    });
    return {
        message: `User created succesfully with the id: ${user_id}`,
        user: newUser,
    };
};

// registerUser({
//     firstname: 'José',
//     lastname: 'Moya',
//     email: 'jose@academlo.com',
//     password: '123456',
//     phone: '123936699'
// })

const getAllUsers = async () => {
    const users = await models.users.findAll({
        attributes: {
            exclude: ['password'],
        },
    });

    return users;
};

const getUserById = async (id) => {
    const user = await models.users.findByPk(id);
    return user;
};

const getUserByEmail = async (email) => {
    const user = await models.users.findOne({
        where: {
            email,
        },
    });
    return user;
};

const editUser = async (id, data) => {
    const user = await models.users.update(data, {
        where: {
            id
        },
    });
    return {
        message: `Users with id: ${id} eddited succesfully.`,
        user: user,
    };
};

const deleteUser = async (id) => {
    const user = await models.users.destroy({
        where: {
            id,
        },
    });
    return {
        message: `User with id: ${id} deleted succesfully.`,
        user,
    };
};

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    editUser,
    deleteUser,
    getUserByEmail,
};