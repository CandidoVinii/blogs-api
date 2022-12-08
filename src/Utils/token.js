const jwt = require('jsonwebtoken');
require('dotenv').config();

const TokenMediator = {
  createToken: (secretePassword, id) => {
    const generateToken = jwt.sign({
      secretePassword, id
    }, process.env.JWT_SECRET,
    {
      algorithm: 'HS256',
      expiresIn: 900000
    })
    return generateToken;
  },
};

module.exports = TokenMediator;