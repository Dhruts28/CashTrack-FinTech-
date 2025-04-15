const express = require('express');
const router = express.Router();
const AuditLogController = require('../controllers/auditLogController');

router.get('/', AuditLogController.getAllAuditLogs);
router.get('/:log_id', AuditLogController.getAuditLogById);
router.post('/', AuditLogController.createAuditLog);
router.put('/:log_id', AuditLogController.updateAuditLog);
router.delete('/:log_id', AuditLogController.deleteAuditLog);

module.exports = router;
