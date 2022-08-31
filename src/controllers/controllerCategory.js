const { createCategory, getCategories } = require('../services/category');

const categoryCreator = async (req, res) => {
    const { name } = req.body;
    const response = await createCategory({ name });

    return res.status(201).send(response);
};

const getAllCategories = async (_req, res) => {
    const response = await getCategories();

    return res.status(200).send(response);
};

module.exports = { categoryCreator, getAllCategories };