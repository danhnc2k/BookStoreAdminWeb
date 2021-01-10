var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')


router.get('/orders', orderController.getOrders);



module.exports = router;