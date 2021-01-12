const express = require('express');
const router = express.Router();
const authorController=require('../controllers/authorController')

/* GET home page. */
router.get('/', authorController.getLogin);
router.get('/login',authorController.getLogin);
router.get('/users/list',authorController.getUsers);
router.get('/users/detail/:id',authorController.getUserProfile);

router.post('/task/lock',authorController.lockUser);
router.post('/task/update',authorController.updateAdminProfile);
router.get('/admin/detail', authorController.getAdminProfile);

module.exports = router;