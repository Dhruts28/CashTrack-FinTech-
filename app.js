const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import routes for each table
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const transactionVersionRoutes = require('./routes/transactionVersionRoutes');
const categoryRoutes = require('./routes/categoriesRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const budgetTriggerRoutes = require('./routes/budgetTriggerRoutes');
const frequentTransactionRoutes = require('./routes/frequentTransactionsRoutes');
const auditLogRoutes = require('./routes/auditLogRoutes');

// Middleware setup
app.use(cors());
app.use(bodyParser.json());  // Parse incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded bodies

app.get('/', (req, res) => {
    res.send('Welcome to CashTrack!'); // Or render a homepage
});

// Static folder for assets (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes in the app
app.use('/api/users', userRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/transactionversions', transactionVersionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/budget', budgetRoutes);
app.use('/api/budgettrigger', budgetTriggerRoutes);
app.use('/api/frequenttransactions', frequentTransactionRoutes);
app.use('/api/auditlog', auditLogRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Personal Finance Tracker API is running!');
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
