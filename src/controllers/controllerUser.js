const { createUser } = require('../services/user');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const response = await createUser({ displayName, email, password, image });

    res.status(201).send({ token: response });
};

module.exports = {
    create,
};
