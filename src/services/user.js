const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const md5 = require('md5');
require('dotenv').config();

const createUser = async ({ displayName, email, password, image }) => {
    const secretePassword = md5(password);
    const user = await User.create({ displayName, email, password: secretePassword, image });

    const generateToken = jwt.sign({ secretePassword, id: user.id },
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