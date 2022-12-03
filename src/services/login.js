const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models');
require('dotenv').config();

const login = async ({ email, password }) => {
    const secretePassword =  md5(password);
    const user = await User.findOne({ where: { email, password: secretePassword } });
    if (!user) return null;

    const generateToken = jwt.sign({ secretePassword, id: user.id },
        process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: 3600 });

    return generateToken;
};

module.exports = { login };