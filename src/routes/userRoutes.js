const express = require('express');
const controller = require('../controllers/controllerUser');
const validation = require('../middlewares/userValidate');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', validation.userValidation, validation.userVerificate, controller.create);
router.get('/:id', tokenValidate, controller.getById);
router.get('/', tokenValidate, controller.getAll);

module.exports = router;
