const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    const create = await Category.create({ name });
    if (!create) return false;

    return create;
};

const getCategories = async () => {
    const response = await Category.findAll();

    return response;
};

module.exports = { createCategory, getCategories };