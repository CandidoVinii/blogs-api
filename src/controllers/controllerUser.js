const service = require('../services/user');


const user = {
    create: async (req, res) => {
        const { displayName, email, password, image } = req.body;
        const response = await service.createUser({ displayName, email, password, image });
    
        res.status(201).send({ token: response });
    },
    
    getAll: async (_req, res) => {
        const response = await service.getAllUsers();
        res.status(200).send(response);
    },
    
    getById: async (req, res) => {
        const { id } = req.params;
    
        const response = await service.getbyId({ id });
        if (!response) return res.status(404).send({ message: 'User does not exist' });
    
        return res.status(200).send(response);
    },
    
    resetPassword: async (req, res) => {
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return res.status(400).send({ message: 'Some required fields are missing'});
        }
        const resetService = await service.resetPass({ oldPassword, newPassword });
        if (!resetService) return res.status(400).send({ message: 'invalid old password' });
        res.status(200).send({ message: 'Senha alterada' });
    }
}


module.exports = user;
