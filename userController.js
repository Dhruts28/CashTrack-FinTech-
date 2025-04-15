const db = require('../connection/db');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM Users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  const { user_id } = req.params;
  db.query('SELECT * FROM Users WHERE user_id = ?', [user_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  db.query('INSERT INTO Users SET ?', newUser, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ user_id: result.insertId, ...newUser });
  });
};

exports.updateUser = (req, res) => {
  const { user_id } = req.params;
  const updatedUser = req.body;
  db.query('UPDATE Users SET ? WHERE user_id = ?', [updatedUser, user_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ user_id, ...updatedUser });
  });
};

exports.deleteUser = (req, res) => {
  const { user_id } = req.params;
  db.query('DELETE FROM Users WHERE user_id = ?', [user_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User deleted successfully' });
  });
};
