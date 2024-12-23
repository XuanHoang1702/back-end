const express = require('express');
const router = express.Router();
const OrderDetailController = require('../controllers/OrderDetailController');


router.post('/store', OrderDetailController.store);

module.exports = router