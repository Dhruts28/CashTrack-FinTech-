const express = require('express');
const router = express.Router();
const FrequentTransactionsController = require('../controllers/frequentTransactionController');

router.get('/', FrequentTransactionsController.getAllFrequentTransactions);
router.get('/:frequent_id', FrequentTransactionsController.getFrequentTransactionById);
router.post('/', FrequentTransactionsController.createFrequentTransaction);
router.put('/:frequent_id', FrequentTransactionsController.updateFrequentTransaction);
router.delete('/:frequent_id', FrequentTransactionsController.deleteFrequentTransaction);

module.exports = router;
