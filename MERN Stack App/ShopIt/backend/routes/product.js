const express = require('express');
const router = express.Router();

const { getProducts } = require('../controllers/productController')

//to get all the products
router.route('/products').get(getProducts)

module.exports = router;