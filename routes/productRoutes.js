const express = require("express");
const router = express.Router();

const ProductController = require('../controller/productController');


router.get('/fetch' , ProductController.fetchProducts); 

router.get('/:id', ProductController.productById);

router.get('/' , ProductController.products)

module.exports = router;