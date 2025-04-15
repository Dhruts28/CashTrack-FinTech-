const db = require('../connection/db');

exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM Categories', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getCategoryById = (req, res) => {
  const { category_id } = req.params;
  db.query('SELECT * FROM Categories WHERE category_id = ?', [category_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.createCategory = (req, res) => {
  const newCategory = req.body;
  db.query('INSERT INTO Categories SET ?', newCategory, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ category_id: result.insertId, ...newCategory });
  });
};

exports.updateCategory = (req, res) => {
  const { category_id } = req.params;
  const updatedCategory = req.body;
  db.query('UPDATE Categories SET ? WHERE category_id = ?', [updatedCategory, category_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ category_id, ...updatedCategory });
  });
};

exports.deleteCategory = (req, res) => {
  const { category_id } = req.params;
  db.query('DELETE FROM Categories WHERE category_id = ?', [category_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Category deleted successfully' });
  });
};
