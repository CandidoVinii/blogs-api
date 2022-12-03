const express = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRoutes');
const categoriesRouter = require('./categoriesRoutes');
const postRouter = require('./postRouters');

const routes = express.Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/categories', categoriesRouter);
routes.use('/post', postRouter);

module.exports = routes;