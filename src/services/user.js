const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const createUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });

    if (!user) {
        return false;
    }

    const generateToken = jwt.sign({ email: user.email },
        process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: 3600 });

    return generateToken;
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