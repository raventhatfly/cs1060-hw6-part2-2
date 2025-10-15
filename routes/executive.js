const express = require('express');
const router = express.Router();

// Mock data generators for executive dashboard
const generateOrgKnowledgeBase = () => {
  return {
    totalTeams: 12,
    totalEmployees: 156,
    knowledgeNodes: 847,
    recentUpdates: [
      {
        id: 1,
        team: 'Engineering',
        update: 'New microservices architecture documented',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        impact: 'high'
      },
      {
        id: 2,
        team: 'Product',
        update: 'Q4 roadmap finalized and shared',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        impact: 'high'
      },
      {
        id: 3,
        team: 'Sales',
        update: 'Customer feedback repository updated',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        impact: 'medium'
      },
      {
        id: 4,
        team: 'Marketing',
        update: 'Brand guidelines version 3.0 published',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        impact: 'medium'
      }
    ],
    departmentInsights: [
      { department: 'Engineering', knowledgeScore: 94, activityLevel: 'high', trend: 'up' },
      { department: 'Product', knowledgeScore: 88, activityLevel: 'high', trend: 'stable' },
      { department: 'Sales', knowledgeScore: 82, activityLevel: 'medium', trend: 'up' },
      { department: 'Marketing', knowledgeScore: 79, activityLevel: 'medium', trend: 'down' },
      { department: 'Customer Success', knowledgeScore: 91, activityLevel: 'high', trend: 'up' }
    ]
  };
};

const generateCultureAlignment = () => {
  return {
    overallScore: 87,
    trend: 'up',
    missionAlignment: {
      score: 89,
      details: 'Teams consistently reference company mission in decision-making',
      trend: 'stable'
    },
    visionAlignment: {
      score: 85,
      details: 'Strategic initiatives align well with long-term vision',
      trend: 'up'
    },
    valuesAlignment: {
      score: 88,
      details: 'Core values reflected in daily operations and communications',
      trend: 'up'
    },
    teamBreakdown: [
      { team: 'Engineering', score: 91, strength: 'Innovation', improvement: 'Customer-centricity' },
      { team: 'Product', score: 93, strength: 'Vision alignment', improvement: 'Cross-team collaboration' },
      { team: 'Sales', score: 84, strength: 'Customer focus', improvement: 'Long-term thinking' },
      { team: 'Marketing', score: 82, strength: 'Brand consistency', improvement: 'Data-driven decisions' },
      { team: 'Customer Success', score: 90, strength: 'Customer-centricity', improvement: 'Innovation' }
    ],
    alerts: [
      {
        type: 'warning',
        message: 'Marketing team showing signs of cultural drift in recent communications',
        actionRequired: true,
        recommendation: 'Schedule 1-on-1 with Marketing leadership'
      }
    ]
  };
};

const generateDecisionReadiness = () => {
  return {
    aiAgentsActive: 8,
    queriesProcessed24h: 247,
    avgResponseTime: '1.2s',
    decisionSupport: [
      {
        id: 1,
        topic: 'Should we expand to European market in Q2?',
        aiInsight: 'Analysis of 89 data points suggests favorable conditions. Sales team capacity at 78%, product localization 65% complete.',
        confidence: 82,
        sources: ['Sales Dashboard', 'Product Roadmap', 'Market Research', 'Financial Projections'],
        recommendation: 'Proceed with soft launch in UK/Germany, delay France to Q3'
      },
      {
        id: 2,
        topic: 'Engineering headcount increase feasibility',
        aiInsight: 'Current hiring pipeline has 23 qualified candidates. Runway supports 15 new hires. Team velocity suggests need for 12.',
        confidence: 91,
        sources: ['HR Dashboard', 'Financial Model', 'Engineering Metrics'],
        recommendation: 'Approve 12 engineering hires, prioritize backend and ML roles'
      },
      {
        id: 3,
        topic: 'Customer churn risk analysis',
        aiInsight: '8 enterprise accounts showing early warning signs. Primary factors: feature gap (45%), support response time (32%), pricing concerns (23%).',
        confidence: 88,
        sources: ['Customer Success', 'Product Usage', 'Support Tickets'],
        recommendation: 'Immediate action required on support staffing and feature prioritization'
      }
    ],
    recentQueries: [
      { query: 'What percentage of employees completed Q3 OKRs?', timestamp: '2 hours ago', answered: true },
      { query: 'Top 3 customer pain points this month?', timestamp: '5 hours ago', answered: true },
      { query: 'Engineering sprint velocity trend', timestamp: '1 day ago', answered: true }
    ]
  };
};

const generateLeadershipImpact = () => {
  return {
    reachScore: 94,
    engagementScore: 88,
    recentCommunications: [
      {
        id: 1,
        type: 'All-hands',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        reach: 152,
        engagement: 94,
        sentiment: 'positive',
        keyTakeaways: ['Q3 results exceeded expectations', 'New product launch timeline shared', 'Team recognition'],
        rippleEffect: {
          managerActions: 8,
          teamDiscussions: 23,
          alignmentShift: '+7%'
        }
      },
      {
        id: 2,
        type: 'Strategic Update',
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        reach: 45,
        engagement: 91,
        sentiment: 'positive',
        keyTakeaways: ['Market expansion strategy', 'Investment in AI capabilities'],
        rippleEffect: {
          managerActions: 12,
          teamDiscussions: 34,
          alignmentShift: '+12%'
        }
      }
    ],
    decisionImpact: [
      {
        decision: 'Approved remote-first policy',
        date: '15 days ago',
        satisfaction: 96,
        productivity: '+8%',
        culturalImpact: 'Very positive - increased work-life balance scores'
      },
      {
        decision: 'Quarterly bonus structure change',
        date: '30 days ago',
        satisfaction: 78,
        productivity: 'stable',
        culturalImpact: 'Mixed - some concerns about fairness metrics'
      }
    ],
    influenceMap: {
      directReports: 12,
      extendedNetwork: 156,
      culturalChampions: 23,
      atRiskRelationships: 2
    }
  };
};

const generateSuccessionRisk = () => {
  return {
    overallRiskLevel: 'moderate',
    talentMisfits: [
      {
        id: 1,
        employee: 'Sarah Chen',
        role: 'Senior Product Manager',
        department: 'Product',
        riskLevel: 'high',
        signals: ['Low engagement scores (2 months)', 'Reduced contribution to team meetings', 'Skill mismatch with new strategic direction'],
        recommendation: 'Schedule career development conversation, explore role adjustment',
        flightRisk: 72
      },
      {
        id: 2,
        employee: 'Marcus Johnson',
        role: 'Engineering Lead',
        department: 'Engineering',
        riskLevel: 'medium',
        signals: ['Expressing interest in startup ecosystem', 'Limited growth path visibility'],
        recommendation: 'Discuss senior leadership opportunities, consider equity refresh',
        flightRisk: 58
      }
    ],
    culturalDrift: [
      {
        team: 'Marketing',
        severity: 'medium',
        indicators: ['Decreased cross-functional collaboration', 'Siloed decision-making patterns'],
        trend: 'worsening',
        affectedEmployees: 8,
        recommendation: 'Team workshop on company values, increase leadership visibility'
      }
    ],
    organizationalBottlenecks: [
      {
        area: 'Product Approval Process',
        severity: 'high',
        impact: 'Delaying time-to-market by avg 3.2 weeks',
        affectedTeams: ['Product', 'Engineering', 'Design'],
        recommendation: 'Streamline approval workflow, delegate authority to product directors'
      },
      {
        area: 'Cross-department Communication',
        severity: 'medium',
        impact: 'Duplicate work, misaligned priorities',
        affectedTeams: ['Sales', 'Marketing', 'Customer Success'],
        recommendation: 'Implement weekly sync, shared OKR dashboard'
      }
    ],
    successionReadiness: {
      criticalRoles: 15,
      readySuccessors: 9,
      developmentPipeline: 12,
      highRisk: [
        { role: 'CTO', successors: 1, readiness: 'moderate', timeline: '12-18 months' },
        { role: 'VP Sales', successors: 0, readiness: 'low', timeline: '24+ months' },
        { role: 'Head of Product', successors: 2, readiness: 'high', timeline: '6 months' }
      ]
    }
  };
};

// API Endpoints
router.get('/org-knowledge', (req, res) => {
  res.json(generateOrgKnowledgeBase());
});

router.get('/culture-alignment', (req, res) => {
  res.json(generateCultureAlignment());
});

router.get('/decision-readiness', (req, res) => {
  res.json(generateDecisionReadiness());
});

router.get('/leadership-impact', (req, res) => {
  res.json(generateLeadershipImpact());
});

router.get('/succession-risk', (req, res) => {
  res.json(generateSuccessionRisk());
});

router.get('/overview', (req, res) => {
  res.json({
    orgKnowledge: generateOrgKnowledgeBase(),
    cultureAlignment: generateCultureAlignment(),
    decisionReadiness: generateDecisionReadiness(),
    leadershipImpact: generateLeadershipImpact(),
    successionRisk: generateSuccessionRisk()
  });
});

module.exports = router;
