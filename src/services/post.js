const { User, BlogPost, Category, PostCategory, sequelize } = require('../database/models');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const createPost = async (data, token) => {
    const decodeToken = jwt.decode(token, { complete: true });
    const id = decodeToken.payload.id;
    const response = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create(
            { title: data.title, content: data.content, userId: id },
            { transaction: t },
        );
        const categories = data.categoryIds.map((getId) => ({ postId: post.id, categoryId: getId }));
        await PostCategory.bulkCreate(
            categories,
            { transaction: t },
        );
        return post;
    });
    return response;
};

const getAllPosts = async () => {
    const response = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return response;
};

const postById = async ({ id }) => {
    const findOne = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    if (!findOne) return false;

    return findOne;
};

const searchPost = async (searchString) => {
    const search = await BlogPost.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.substring]: searchString } },
                { content: { [Op.substring]: searchString } },
            ],
        },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ]
    });
    if(search.length === 0) return false;
    return search;
}

const deletePost = async (postId, token) => {
    const findPost = await BlogPost.findByPk(postId);
    const decodeToken = jwt.decode(token, { complete: true });
    const id = decodeToken.payload.id;
    if(!findPost) return false;
    if(findPost.userId !== id) return false;
    await BlogPost.destroy({
        where: { id: postId }
    });
};

const updatePost = async (postId, token, { title, content }) => {
    const findPost = await BlogPost.findByPk(postId);
    const decodeToken = jwt.decode(token, { complete: true });
    const id = decodeToken.payload.id;
    if(!findPost) return false;
    if(findPost.userId !== id) return false;
    await BlogPost.update(
        { title, content },
        { where: { id: postId } },
    );
    return await BlogPost.findByPk(postId);
}
module.exports = { getAllPosts, postById, createPost, searchPost, deletePost, updatePost };
