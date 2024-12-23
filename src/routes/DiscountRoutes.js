const express = require('express');
const route = express.Router();
const DiscountController = require('../controllers/DiscountController');

route.get('/', DiscountController.index);
route.post('/', DiscountController.store);

module.exports = route;