const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authenticate = require('../middleware/auth');

router.get('/', UserController.index);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authenticate, (req, res) => {
    const user = req.user;
    res.status(200).json(user);
})
module.exports = router;
