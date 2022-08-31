const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    const create = await Category.create({ name });
    if (!create) return false;

    return create;
};

module.exports = { createCategory };