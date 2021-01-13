const express = require('express');
const router = express.Router();
const authorController=require('../controllers/authorController')

/* GET home page. */
router.get('/', authorController.getLogin);
router.get('/login',authorController.getLogin);
<<<<<<< Updated upstream
router.get('/users',authorController.getUsers);
router.get('/profile',authorController.getProfile);
router.get('/editProfile', authorController.getEditProfile);
=======
router.get('/users/list',authorController.getUsers);
router.get('/users/detail/:id',authorController.getUserProfile);

router.post('/task/lock',authorController.lockUser);
router.post('/task/update',authorController.updateAdminProfile);
router.get('/admin/detail', authorController.getAdminProfile);
>>>>>>> Stashed changes

module.exports = router;