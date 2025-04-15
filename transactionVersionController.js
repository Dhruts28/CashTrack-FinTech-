const db = require('../connection/db');

exports.getAllTransactionVersions = (req, res) => {
  db.query('SELECT * FROM TransactionVersions', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getTransactionVersionById = (req, res) => {
  const { version_id } = req.params;
  db.query('SELECT * FROM TransactionVersions WHERE version_id = ?', [version_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createTransactionVersion = (req, res) => {
  const newTransactionVersion = req.body;
  db.query('INSERT INTO TransactionVersions SET ?', newTransactionVersion, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ version_id: result.insertId, ...newTransactionVersion });
  });
};

exports.updateTransactionVersion = (req, res) => {
  const { version_id } = req.params;
  const updatedTransactionVersion = req.body;
  db.query('UPDATE TransactionVersions SET ? WHERE version_id = ?', [updatedTransactionVersion, version_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ version_id, ...updatedTransactionVersion });
  });
};

exports.deleteTransactionVersion = (req, res) => {
  const { version_id } = req.params;
  db.query('DELETE FROM TransactionVersions WHERE version_id = ?', [version_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Transaction Version deleted successfully' });
  });
};
