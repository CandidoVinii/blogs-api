const { User } = require('../database/models');
const HashPassword = require('../Utils/hashPassword');
const TokenMediator = require('../Utils/token');

const login = {
    loginUser: async ({ email, password }) => {
        const secretPass = HashPassword.createHash(password);
        const user = await User.findOne({ where: { email, password: secretPass } });
        if (!user) return false;
    
        const token = TokenMediator.create(user.password, user.id);
    
        return token;
    },
}

module.exports = login;