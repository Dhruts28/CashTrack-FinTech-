const express = require('express');
const router = express.Router();
const TransactionsController = require('../controllers/transactionController');

router.get('/', TransactionsController.getAllTransactions);
router.get('/:transaction_id', TransactionsController.getTransactionById);
router.post('/', TransactionsController.createTransaction);
router.put('/:transaction_id', TransactionsController.updateTransaction);
router.delete('/:transaction_id', TransactionsController.deleteTransaction);

module.exports = router;
