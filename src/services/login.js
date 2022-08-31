const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
  
    if (!user) {
      return null;
    }
  
    const generateToken = jwt.sign({ email: user.email },
      process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: 3600 });
  
    return generateToken;
};

module.exports = { login };