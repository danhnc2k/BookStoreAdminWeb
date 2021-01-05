var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController')


router.get('/products', productController.getProducts);

module.exports = router;