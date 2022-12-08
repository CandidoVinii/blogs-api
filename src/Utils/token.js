const jwt = require('jsonwebtoken');
require('dotenv').config();

const TokenMediator = {
  create: (secretePassword, id) => {
    const generateToken = jwt.sign({
      secretePassword, id
    }, process.env.JWT_SECRET,
    {
      algorithm: 'HS256',
      expiresIn: 900000
    })
    return generateToken;
  },
  decode: (token) => {
    const decode = jwt.decode(token, { complete: true });
    const { id } = decode.payload
    return id;
  }
};

module.exports = TokenMediator;