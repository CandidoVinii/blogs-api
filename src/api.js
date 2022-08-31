const express = require('express');
const controllerLogin = require('./controllers/controllerLogin');
const controllerUser = require('./controllers/controllerUser');
const validation = require('./middlewares/userValidate');
const tokenValidate = require('./middlewares/tokenValidate');
// ...

const app = express();

app.use(express.json());

app.post('/login', controllerLogin.login);

app.post('/user', validation.userValidation, validation.userVerificate, controllerUser.create);

app.get('/user', tokenValidate, controllerUser.getAll);

app.get('/user/:id', tokenValidate, controllerUser.getById);
// ....

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
