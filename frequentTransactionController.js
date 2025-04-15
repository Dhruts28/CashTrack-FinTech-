const db = require('../connection/db');

exports.getAllFrequentTransactions = (req, res) => {
  db.query('SELECT * FROM FrequentTransactions', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getFrequentTransactionById = (req, res) => {
  const { frequent_id } = req.params;
  db.query('SELECT * FROM FrequentTransactions WHERE frequent_id = ?', [frequent_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createFrequentTransaction = (req, res) => {
  const newFrequentTransaction = req.body;
  db.query('INSERT INTO FrequentTransactions SET ?', newFrequentTransaction, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ frequent_id: result.insertId, ...newFrequentTransaction });
  });
};

exports.updateFrequentTransaction = (req, res) => {
  const { frequent_id } = req.params;
  const updatedFrequentTransaction = req.body;
  db.query('UPDATE FrequentTransactions SET ? WHERE frequent_id = ?', [updatedFrequentTransaction, frequent_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ frequent_id, ...updatedFrequentTransaction });
  });
};

exports.deleteFrequentTransaction = (req, res) => {
  const { frequent_id } = req.params;
  db.query('DELETE FROM FrequentTransactions WHERE frequent_id = ?', [frequent_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Frequent Transaction deleted successfully' });
  });
};
