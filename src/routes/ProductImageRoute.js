const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const ProductImageController = require('../controllers/ProductImageController');

router.post('/add', upload.single('image_url'), ProductImageController.store)
router.get('/list', ProductImageController.index);
router.get('/show/:product_id', ProductImageController.show);



module.exports = router;
