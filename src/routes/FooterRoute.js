const FooterController = require('../controllers/FooterController');
const express = require('express');
const router = express.Router();

router.get('/', FooterController.index);
router.post('/', FooterController.store);

module.exports = router;