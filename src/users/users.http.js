const userControllers = require('./users.controller');
const { toPromise } = require('../utils/toPromise');

const getAllUsers = async (req, res) => {
    //!cambiar por authAdmin en dado caso
    const user = await toPromise(userControllers.getAllUsers());
    res.status(200).json(user);
};

const getUserById = async (req, res) => {
    const id = req.params.uuid;
    const [users, error] = await toPromise(userControllers.getUserById(id));
    if (error || !users) {
        console.log(error)
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json(users);
};

const getMyUserData = async (req, res) => {
    const id = req.user.id;
    const [user, error] = await toPromise(userControllers.getUserById(id));
    if (error || !user) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json(user);
};

const updateUser = async (req, res) => {
    const id = req.params.uuid;
    const data = req.body
    const [user, error] = await toPromise(
        userControllers.editUser(id, data)
    );
    if (error || !user) {
        res.status(400).json({ message: 'Try with another address' });
    }
    console.log(error)
    res.status(200).json({ user, message: 'all good' });
};


const deleteUser = async (req, res) => {
    const id = req.params.id;
    const [users, error] = await toPromise(userControllers.deleteUser(id));
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json({ message: 'all good' });
};

module.exports = {
    getAllUsers,
    getUserById,
    getMyUserData,
    deleteUser,
    updateUser
};