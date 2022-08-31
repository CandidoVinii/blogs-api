const { getAllPosts } = require('../services/post');

// const postCreator = async (req, res) => {
//     const { title, content, categoryIds } = req.body;

//     const response = await createPost({ title, content, categoryIds });

//     return res.status(201).send(response);
// };

const getAllBlogsPosts = async (_req, res) => {
    const response = await getAllPosts();

    if (!response) return res.status(404).send({ message: 'not found' });

    return res.status(200).send(response);
};

module.exports = { getAllBlogsPosts };