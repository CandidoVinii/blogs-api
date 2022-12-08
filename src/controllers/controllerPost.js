const {
    getAllPosts,
    postById,
    createPost,
    searchPost,
    deletePost,
    updatePost } = require('../services/post');

const postCreator = async (req, res) => {
    const token = req.header('Authorization');

    const response = await createPost(req.body, token);
    return res.status(201).send(response);
};

const postSearch = async (req, res) => {
    const { q } = req.query;
    const response = await searchPost(q);
    if (!response) return res.status(404).send({ message: 'Post not found' });
    return res.status(200).send(response);
};

const postDelete = async (req, res) => {
    const { id } = req.params;
    const token = req.header('Authorization');

    const response = await deletePost(id, token);
    if (response === false) return res.status(404).send({ message: 'Post not found' });
    return res.status(204).end();
};

const postUpdate = async (req, res) => {
    const { id } = req.params;
    const token = req.header('Authorization');
    const { title, content } = req.body;
    const response = await updatePost(id, token, { title, content });
    if (!response) return res.status(404).send({ message: 'Post not found' });
    return res.status(200).send(response);
};

const getAllBlogsPosts = async (_req, res) => {
    const response = await getAllPosts();

    if (!response) return res.status(404).send({ message: 'not found' });

    return res.status(200).send(response);
};

const getPostById = async (req, res) => {
    const { id } = req.params;

    const response = await postById({ id });
    if (!response) return res.status(404).send({ message: 'Post does not exist' });

    return res.status(200).send(response);
};

module.exports = { getAllBlogsPosts, getPostById, postCreator, postSearch, postDelete, postUpdate };