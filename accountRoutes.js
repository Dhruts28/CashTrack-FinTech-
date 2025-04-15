const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/', accountController.getAllAccounts);
router.get('/:account_id', accountController.getAccountById);
router.post('/', accountController.createAccount);
router.put('/:account_id', accountController.updateAccount);
router.delete('/:account_id', accountController.deleteAccount);

module.exports = router;
