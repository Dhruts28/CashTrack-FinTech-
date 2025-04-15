const db = require('../connection/db');

exports.getAllBudgets = (req, res) => {
  db.query('SELECT * FROM Budget', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getBudgetById = (req, res) => {
  const { budget_id } = req.params;
  db.query('SELECT * FROM Budget WHERE budget_id = ?', [budget_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createBudget = (req, res) => {
  const newBudget = req.body;
  db.query('INSERT INTO Budget SET ?', newBudget, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ budget_id: result.insertId, ...newBudget });
  });
};

exports.updateBudget = (req, res) => {
  const { budget_id } = req.params;
  const updatedBudget = req.body;
  db.query('UPDATE Budget SET ? WHERE budget_id = ?', [updatedBudget, budget_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ budget_id, ...updatedBudget });
  });
};

exports.deleteBudget = (req, res) => {
  const { budget_id } = req.params;
  db.query('DELETE FROM Budget WHERE budget_id = ?', [budget_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Budget deleted successfully' });
  });
};
