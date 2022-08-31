const { User, BlogPost, Category } = require('../database/models');

// const createPost = async ({ title, content, categoryIds }) => {
//     const response = await BlogPost.create({ title, content, categoryIds });

//     return response;
// };

const getAllPosts = async () => {
    const response = await BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return response;
};

module.exports = { getAllPosts };
