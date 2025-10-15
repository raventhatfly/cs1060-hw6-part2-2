const express = require('express');
const router = express.Router();

// Placeholder routes for employee dashboard
router.get('/overview', (req, res) => {
  res.json({
    message: 'Employee dashboard - Coming soon',
    features: [
      'Personal Development',
      'Goals & OKRs',
      'Learning Resources',
      'Feedback & Recognition'
    ]
  });
});

module.exports = router;
