const ProductController = require('../controllers/ProductController');
const express = require('express');
const router = express.Router();

router.get('/', ProductController.index);
router.get('/show/:product_id', ProductController.show);
module.exports = router;