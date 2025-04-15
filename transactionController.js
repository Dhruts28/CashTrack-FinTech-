const db = require('../connection/db');

exports.getAllTransactions = (req, res) => {
  db.query('SELECT * FROM Transactions', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getTransactionById = (req, res) => {
  const { transaction_id } = req.params;
  db.query('SELECT * FROM Transactions WHERE transaction_id = ?', [transaction_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createTransaction = (req, res) => {
  const newTransaction = req.body;
  db.query('INSERT INTO Transactions SET ?', newTransaction, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ transaction_id: result.insertId, ...newTransaction });
  });
};

exports.updateTransaction = (req, res) => {
  const { transaction_id } = req.params;
  const updatedTransaction = req.body;
  db.query('UPDATE Transactions SET ? WHERE transaction_id = ?', [updatedTransaction, transaction_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ transaction_id, ...updatedTransaction });
  });
};

exports.deleteTransaction = (req, res) => {
  const { transaction_id } = req.params;
  db.query('DELETE FROM Transactions WHERE transaction_id = ?', [transaction_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Transaction deleted successfully' });
  });
};
