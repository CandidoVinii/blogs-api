const md5 = require('md5');

const HashPassword = {
  createHash: (password) => {
    const generate = md5(password.toString);

    return generate;
  },
};

module.exports = HashPassword;