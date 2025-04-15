const db = require('../connection/db');

exports.getAllBudgetTriggers = (req, res) => {
  db.query('SELECT * FROM BudgetTrigger', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getBudgetTriggerById = (req, res) => {
  const { trigger_id } = req.params;
  db.query('SELECT * FROM BudgetTrigger WHERE trigger_id = ?', [trigger_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createBudgetTrigger = (req, res) => {
  const newBudgetTrigger = req.body;
  db.query('INSERT INTO BudgetTrigger SET ?', newBudgetTrigger, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ trigger_id: result.insertId, ...newBudgetTrigger });
  });
};

exports.updateBudgetTrigger = (req, res) => {
  const { trigger_id } = req.params;
  const updatedBudgetTrigger = req.body;
  db.query('UPDATE BudgetTrigger SET ? WHERE trigger_id = ?', [updatedBudgetTrigger, trigger_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ trigger_id, ...updatedBudgetTrigger });
  });
};

exports.deleteBudgetTrigger = (req, res) => {
  const { trigger_id } = req.params;
  db.query('DELETE FROM BudgetTrigger WHERE trigger_id = ?', [trigger_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Budget Trigger deleted successfully' });
  });
};
