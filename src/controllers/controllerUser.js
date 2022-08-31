const { createUser, getAllUsers, getbyId } = require('../services/user');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const response = await createUser({ displayName, email, password, image });

    res.status(201).send({ token: response });
};

const getAll = async (_req, res) => {
    const response = await getAllUsers();

    res.status(200).send(response);
};

const getById = async (req, res) => {
    const { id } = req.params;

    const response = await getbyId({ id });
    if (!response) return res.status(404).send({ message: 'User does not exist' });

    return res.status(200).send(response);
};

module.exports = {
    create,
    getAll,
    getById,
};
