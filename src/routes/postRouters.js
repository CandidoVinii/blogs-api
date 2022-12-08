const express = require('express');
const controller = require('../controllers/controllerPost');
const { postValidate } = require('../middlewares/blogValidate');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.get('/search', tokenValidate, controller.postSearch);
router.get('/', tokenValidate, controller.getAllBlogsPosts);
router.get('/:id', tokenValidate, controller.getPostById);
router.post('/', tokenValidate, postValidate, controller.postCreator);
router.patch('/:id', tokenValidate, controller.postUpdate);
router.delete('/:id', tokenValidate, controller.postDelete);

module.exports = router;