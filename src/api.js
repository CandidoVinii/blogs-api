const express = require('express');
const controllerLogin = require('./controllers/controllerLogin');
const controllerUser = require('./controllers/controllerUser');
const controllerCategory = require('./controllers/controllerCategory');
const controllerPost = require('./controllers/controllerPost');
const validation = require('./middlewares/userValidate');
const tokenValidate = require('./middlewares/tokenValidate');
const category = require('./middlewares/categoryValidate');
// ...

const app = express();

app.use(express.json());

app.post('/login', controllerLogin.login);

app.post('/user', validation.userValidation, validation.userVerificate, controllerUser.create);

app.get('/user', tokenValidate, controllerUser.getAll);

app.get('/user/:id', tokenValidate, controllerUser.getById);

app.post('/categories', 
tokenValidate,
category.categoryValidate,
controllerCategory.categoryCreator);

app.get('/categories', tokenValidate, controllerCategory.getAllCategories);

// app.post('/post', tokenValidate, controllerPost.postCreator);

app.get('/post', tokenValidate, controllerPost.getAllBlogsPosts);
// ....

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
