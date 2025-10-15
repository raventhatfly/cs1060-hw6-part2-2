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

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'VOCA AI API Server',
    status: 'running',
    endpoints: [
      '/api/health',
      '/api/executive/overview',
      '/api/manager/overview',
      '/api/employee/overview'
    ]
  });
});

// Serve static assets in production (only for non-API routes)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
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
