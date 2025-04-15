const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categoriesController');

router.get('/', CategoriesController.getAllCategories);
router.get('/:category_id', CategoriesController.getCategoryById);
router.post('/', CategoriesController.createCategory);
router.put('/:category_id', CategoriesController.updateCategory);
router.delete('/:category_id', CategoriesController.deleteCategory);

module.exports = router;
