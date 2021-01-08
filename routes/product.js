var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController')


router.get('/index', productController.getIndex);
router.get('/products/:mainCategory?/:subCategory?', productController.getProducts);
router.get('/product/:id', productController.getProductDetail);


router.get('/delivered', productController.getDelivered);
router.get('/delivering', productController.getDelivering);
router.get('/deliversoon', productController.getDeliversoon);



module.exports = router;