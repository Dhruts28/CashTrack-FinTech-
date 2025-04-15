const express = require('express');
const router = express.Router();
const TransactionVersionsController = require('../controllers/transactionVersionController');

router.get('/', TransactionVersionsController.getAllTransactionVersions);
router.get('/:version_id', TransactionVersionsController.getTransactionVersionById);
router.post('/', TransactionVersionsController.createTransactionVersion);
router.put('/:version_id', TransactionVersionsController.updateTransactionVersion);
router.delete('/:version_id', TransactionVersionsController.deleteTransactionVersion);

module.exports = router;
