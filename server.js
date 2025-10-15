const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const executiveRoutes = require('./routes/executive');
const managerRoutes = require('./routes/manager');
const employeeRoutes = require('./routes/employee');

// Routes
app.use('/api/executive', executiveRoutes);
app.use('/api/manager', managerRoutes);
app.use('/api/employee', employeeRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Export for Vercel serverless
module.exports = app;

// Start server locally
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 VOCA AI Server running on port ${PORT}`);
  });
}
