const express = require('express');
const router = express.Router();
const authorController=require('../controllers/authorController')

/* GET home page. */
router.get('/', authorController.getLogin);
router.get('/login',authorController.getLogin);
router.get('/users',authorController.getUsers);
router.get('/profile',authorController.getProfile);
router.get('/editProfile', authorController.getEditProfile);

module.exports = router;