const express = require('express');
const controller = require('../controllers/controllerCategory');
const { categoryValidate } = require('../middlewares/categoryValidate');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.post('/', 
tokenValidate,
categoryValidate,
controller.categoryCreator);

router.get('/', tokenValidate, controller.getAllCategories);

module.exports = router;