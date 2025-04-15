const db = require('../connection/db');

exports.getAllAuditLogs = (req, res) => {
  db.query('SELECT * FROM AuditLog', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getAuditLogById = (req, res) => {
  const { log_id } = req.params;
  db.query('SELECT * FROM AuditLog WHERE log_id = ?', [log_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createAuditLog = (req, res) => {
  const newAuditLog = req.body;
  db.query('INSERT INTO AuditLog SET ?', newAuditLog, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ log_id: result.insertId, ...newAuditLog });
  });
};

exports.updateAuditLog = (req, res) => {
  const { log_id } = req.params;
  const updatedAuditLog = req.body;
  db.query('UPDATE AuditLog SET ? WHERE log_id = ?', [updatedAuditLog, log_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ log_id, ...updatedAuditLog });
  });
};

exports.deleteAuditLog = (req, res) => {
  const { log_id } = req.params;
  db.query('DELETE FROM AuditLog WHERE log_id = ?', [log_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Audit Log deleted successfully' });
  });
};
