const  express = require('express');
const router = express.Router();
const AddressController = require('../controllers/AddressController');
const authenticate = require('../middleware/auth');

router.get('/', AddressController.index);
router.post('/', authenticate, AddressController.store);


module.exports = router;