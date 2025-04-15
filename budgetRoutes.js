const express = require('express');
const router = express.Router();
const BudgetController = require('../controllers/budgetController');

router.get('/', BudgetController.getAllBudgets);
router.get('/:budget_id', BudgetController.getBudgetById);
router.post('/', BudgetController.createBudget);
router.put('/:budget_id', BudgetController.updateBudget);
router.delete('/:budget_id', BudgetController.deleteBudget);

module.exports = router;
