const db = require('../connection/db');

exports.getAllAccounts = (req, res) => {
  db.query('SELECT * FROM Accounts', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getAccountById = (req, res) => {
  const { account_id } = req.params;
  db.query('SELECT * FROM Accounts WHERE account_id = ?', [account_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createAccount = (req, res) => {
  const newAccount = req.body;
  db.query('INSERT INTO Accounts SET ?', newAccount, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ account_id: result.insertId, ...newAccount });
  });
};

exports.updateAccount = (req, res) => {
  const { account_id } = req.params;
  const updatedAccount = req.body;
  db.query('UPDATE Accounts SET ? WHERE account_id = ?', [updatedAccount, account_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ account_id, ...updatedAccount });
  });
};

exports.deleteAccount = (req, res) => {
  const { account_id } = req.params;
  db.query('DELETE FROM Accounts WHERE account_id = ?', [account_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Account deleted successfully' });
  });
};
