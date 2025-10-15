const express = require('express');
const router = express.Router();

// Placeholder routes for manager dashboard
router.get('/overview', (req, res) => {
  res.json({
    message: 'Manager dashboard - Coming soon',
    features: [
      'Team Performance Tracking',
      'One-on-One Scheduling',
      'Goal Management',
      'Team Health Metrics'
    ]
  });
});

module.exports = router;
