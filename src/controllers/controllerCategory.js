const { createCategory } = require('../services/category');

const categoryCreator = async (req, res) => {
    const { name } = req.body;
    const response = await createCategory({ name });

    return res.status(201).send(response);
};

module.exports = { categoryCreator };