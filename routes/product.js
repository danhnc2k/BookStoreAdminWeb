var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController')


router.get('/index', productController.getIndex);
router.get('/list/:mainCategory?/:subCategory?', productController.getProducts);
router.get('/detail/:id', productController.getProductDetail);
router.get('/add', productController.getAddProductForm);

router.post('/task/add', productController.addProduct);
router.post('/task/update', productController.updateProduct);
router.post('/task/delete', productController.deleteProduct);

router.get('/delivered', productController.getDelivered);
router.get('/delivering', productController.getDelivering);
router.get('/deliversoon', productController.getDeliversoon);



module.exports = router;