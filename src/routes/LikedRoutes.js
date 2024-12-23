const express = require('express');
const router = express.Router();
const LikedController = require('../controllers/LikedController');
const authenticate = require('../middleware/auth');

router.post('/store', authenticate, LikedController.store);

module.exports = router;