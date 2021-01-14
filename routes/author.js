const express = require('express');
const router = express.Router();
const authorController=require('../controllers/authorController');
const productController = require('../controllers/productController');


router.get('/', authorController.getLogin);
router.get('/login',authorController.getLogin);
router.get('/logout',authorController.getLogout);
router.get('/change-password',authorController.getChangePassword);
router.get('/users/list',authorController.getUsers);
router.get('/users/detail/:id',authorController.getUserProfile);

router.post('/task/lock',authorController.lockUser);
router.post('/task/update',authorController.updateAdminProfile);
router.get('/admin/detail', authorController.getAdminProfile);

router.post('/login',authorController.postLogin);
router.post('/change-password',authorController.postChangePassword);

module.exports = router;