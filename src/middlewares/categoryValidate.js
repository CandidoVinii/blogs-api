const { Category } = require('../database/models');

const categoryValidate = async (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).send({ message: '"name" is required' });
  
    const findCategory = await Category.findOne({ where: { name } });

    if (findCategory) {
        return res.status(409).json({ message: 'Category already registered' });
    }

    next();
};

module.exports = { categoryValidate };