const express = require('express');
const router = express.Router();
const BudgetTriggerController = require('../controllers/budgettriggerController');

router.get('/', BudgetTriggerController.getAllBudgetTriggers);
router.get('/:trigger_id', BudgetTriggerController.getBudgetTriggerById);
router.post('/', BudgetTriggerController.createBudgetTrigger);
router.put('/:trigger_id', BudgetTriggerController.updateBudgetTrigger);
router.delete('/:trigger_id', BudgetTriggerController.deleteBudgetTrigger);

module.exports = router;
