const express = require('express');
const router = express.router();
const categoryController = require('../controllers/categoryControllers');


router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', categoryController.updateCategoryById);
router.delete('/categories/:id', categoryController.deleteCategoryById);

module.exports = router;