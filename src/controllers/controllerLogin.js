const service = require('../services/login');

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: 'Some required fields are missing' });
    }
    try {
        const response = await service.login({ email, password });
        if (!response) return res.status(400).send({ message: 'Invalid fields' });
        res.status(200).send({ token: response });
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = { login };