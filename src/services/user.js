const { User } = require('../database/models');
const HashPassword = require('../Utils/hashPassword');
const TokenMediator = require('../Utils/token');

const createUser = async ({ displayName, email, password, image }) => {
    const secretPass = HashPassword.createHash(password)
    const user = await User.create({ displayName, email, password: secretPass, image });

    const token = TokenMediator.create(secretPass, user.id);

    return token;
};

const getAllUsers = async () => {
    const getAll = await User.findAll({ attributes: { exclude: ['password'] } });

    return getAll;
};

const getbyId = async ({ id }) => {
    const findOne = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

    if (!findOne) return false;

    return findOne; 
};

module.exports = { createUser, getAllUsers, getbyId };