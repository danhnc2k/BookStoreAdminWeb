var express = require('express');
var router = express.Router();
const adminController=require('../controllers/adminController')

/* GET home page. */
router.get('/', adminController.index);
router.get('/users',adminController.users);
router.get('/profile',adminController.profile);
module.exports = router;
