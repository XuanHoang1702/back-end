const BrandController = require('../controllers/BrandController');
const express = require('express');
const router = express.Router();

router.get('/', BrandController.index);
router.post('/', BrandController.store);

module.exports = router;