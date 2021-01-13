var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController')


router.get('/index', productController.getIndex);
<<<<<<< Updated upstream
router.get('/products/:mainCategory?/:subCategory?', productController.getProducts);
router.get('/product/:id', productController.getProductDetail);
router.get('/addPro', productController.getAddPro);
router.post('/detail/update', productController.postUpdate);
=======
router.get('/list/:mainCategory?/:subCategory?', productController.getProducts);
router.get('/detail/:id', productController.getProductDetail);
router.get('/add', productController.getAddProductForm);
router.get('/subCategory', productController.getsubCategory);
router.get('/label', productController.getlabel);

router.post('/task/add', productController.addProduct);
router.post('/task/update', productController.updateProduct);
router.post('/task/delete', productController.deleteProduct);
>>>>>>> Stashed changes

router.get('/statistic', productController.getStatistic);
router.get('/delivering', productController.getDelivering);
router.get('/deliversoon', productController.getDeliversoon);



module.exports = router;