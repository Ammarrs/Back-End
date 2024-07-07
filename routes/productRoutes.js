const express = require('express');
const router = express.Router();
const prodCont = require('../controllers/productControllers');

router.post('products',prodCont.createProduct);
router.get('products',prodCnont.getProducts);
router.get('products/:id',prodCont.getProductById);
router.put('products/:id',prodCont.updateProduct);
router.delete('products/:id',prodCont.deleteProduct);

module.exports = router;