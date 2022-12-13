const { User } = require('../database/models');
const HashPassword = require('../Utils/hashPassword');
const TokenMediator = require('../Utils/token');


const user = {
    createUser: async ({ displayName, email, password, image }) => {
        const secretPass = HashPassword.createHash(password);
        const user = await User.create({ displayName, email, password: secretPass, image });
    
        const token = TokenMediator.create(secretPass, user.id);
    
        return token;
    },
    
    getAllUsers: async () => {
        const getAll = await User.findAll({ attributes: { exclude: ['password'] } });
    
        return getAll;
    },
    
    getbyId: async ({ id }) => {
        const findOne = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    
        if (!findOne) return false;
    
        return findOne; 
    },
    
    resetPass: async ({ oldPassword, newPassword }) => {
        const secretPass = HashPassword.createHash(oldPassword);
        const secretNewPass = HashPassword.createHash(newPassword);
        const user = await User.findOne({ where: { password: secretPass } });
        if (!user) return false;
        await User.update(
            { password: secretNewPass },
            { where: { password: secretPass } },
        );
        return true;
    }
}

module.exports = user;