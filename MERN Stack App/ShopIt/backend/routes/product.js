const express = require("express");
const router = express.Router();

const { getProducts, newProduct } = require("../controllers/productController")

//to get all the products
router.route("/products").get(getProducts);

router.route("/product/new").post(newProduct);

module.exports = router;