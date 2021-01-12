var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')


router.get('/list', orderController.getOrders);



module.exports = router;