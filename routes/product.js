var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController');
const orderController=require('../controllers/orderController');


router.get('/list/:mainCategory?/:subCategory?', productController.getProducts);
router.get('/detail/:id', productController.getProductDetail);
router.get('/add', productController.getAddProductForm);
router.get('/subCategory', productController.getsubCategory);
router.get('/label', productController.getlabel);

router.post('/task/add', productController.addProduct);
router.post('/task/update', productController.updateProduct);
router.post('/task/delete', productController.deleteProduct);
router.post('/task/addcategory',productController.addSubCategory);
router.post('/task/addlabel',productController.addLabel);
router.post('/task/update-status',orderController.updateStatus);

router.get('/statistic', productController.getStatistic);



module.exports = router;