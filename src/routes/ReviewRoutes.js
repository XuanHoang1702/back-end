const ReviewController = require('../controllers/ReviewController');
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.post('/store', authenticate, ReviewController.store);

module.exports = router;