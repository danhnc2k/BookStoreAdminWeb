const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* GET list of books. */
router.get('/', productsController.index);
router.get('/:slug/detail', productsController.detail);
router.get('/create', productsController.create);
router.post('/store', productsController.store);
router.delete('/:id', productsController.delete);


module.exports = router;