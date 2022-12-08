const { Op } = require('sequelize');
const { User, BlogPost, Category, sequelize } = require('../database/models');
const TokenMediator = require('../Utils/token');

const createPost = async (data, token) => {
    const id = TokenMediator.decode(token);
    const response = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create(
            { title: data.title, content: data.content, userId: id },
            { transaction: t },
        );
        const categories = data.categoryIds.map((getId) => (
            { postId: post.id, categoryId: getId }
        ));
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
            { model: Category, as: 'categories',  attributes: { exclude: ['id'] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });
    return response;
};

const postById = async ({ id }) => {
    const findOne = await BlogPost.findOne({
        where: { id },
        include: [
            { model: Category, as: 'categories', attributes: { exclude: ['id'] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
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
            { model: Category, as: 'categories',  attributes: { exclude: ['id', 'postId'] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });
    if (search.length === 0) return false;
    return search;
};

const deletePost = async (postId, token) => {
    const intID = Number(postId);
    const findPost = await postById({ id: intID });
    const id = TokenMediator.decode(token);
    if (!findPost) return false;
    if (findPost.dataValues.userId !== id) return false;
    await BlogPost.destroy({
        where: { id: postId },
    });
};

const updatePost = async (postId, token, { title, content }) => {
    const intID = Number(postId);
    const findPost = await postById({ id: intID });
    const id = TokenMediator.decode(token);
    if (!findPost) return false;
    if (findPost.dataValues.userId !== id) return false;
    await BlogPost.update(
        { title, content },
        { where: { id: postId } },
    );
    const findUpdate = await postById({ id: intID });
    return findUpdate;
};
module.exports = { getAllPosts, postById, createPost, searchPost, deletePost, updatePost };
