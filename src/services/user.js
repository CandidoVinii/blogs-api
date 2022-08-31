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

module.exports = { createUser };