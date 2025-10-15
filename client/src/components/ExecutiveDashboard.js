import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { 
  TrendingUp, TrendingDown, Minus, AlertTriangle, 
  CheckCircle, Brain, Target, Users, Activity,
  MessageSquare, Award, AlertCircle
} from 'lucide-react';

const ExecutiveDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/api/executive/overview`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching executive data:', error);
      setLoading(false);
    }
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp size={16} />;
    if (trend === 'down') return <TrendingDown size={16} />;
    return <Minus size={16} />;
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--gray-600)' }}>
          Loading executive dashboard...
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="dashboard-container">
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--danger)' }}>
          Failed to load data. Please try again.
        </div>
      </div>
    );
  }

  const { orgKnowledge, cultureAlignment, decisionReadiness, leadershipImpact, successionRisk } = data;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Executive Command Center</h1>
        <p className="dashboard-subtitle">
          Unified intelligence to steer culture, strategy, and organizational health
        </p>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-label">Culture Alignment</div>
            <div className={`metric-trend ${cultureAlignment.trend}`}>
              {getTrendIcon(cultureAlignment.trend)}
              {cultureAlignment.trend}
            </div>
          </div>
          <div className="metric-value">{cultureAlignment.overallScore}%</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-label">Active Teams</div>
          </div>
          <div className="metric-value">{orgKnowledge.totalTeams}</div>
          <div className="metric-description">{orgKnowledge.totalEmployees} employees</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-label">AI Agents Active</div>
          </div>
          <div className="metric-value">{decisionReadiness.aiAgentsActive}</div>
          <div className="metric-description">{decisionReadiness.queriesProcessed24h} queries today</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-label">Leadership Reach</div>
          </div>
          <div className="metric-value">{leadershipImpact.reachScore}%</div>
          <div className="metric-description">Engagement: {leadershipImpact.engagementScore}%</div>
        </div>
      </div>

      {/* Org Knowledge Base */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <Brain size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Organizational Knowledge Base
            </h2>
          </div>
          <div className="section-badge badge-high">
            {orgKnowledge.knowledgeNodes} knowledge nodes
          </div>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Recent Updates
            </h3>
            {orgKnowledge.recentUpdates.map(update => (
              <div key={update.id} className="list-item">
                <div className="item-header">
                  <div className="item-title">{update.team}</div>
                  <span className={`section-badge badge-${update.impact}`}>{update.impact}</span>
                </div>
                <div className="item-description">{update.update}</div>
                <div className="item-meta">{new Date(update.timestamp).toLocaleString()}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Department Insights
            </h3>
            {orgKnowledge.departmentInsights.map(dept => (
              <div key={dept.department} className="list-item">
                <div className="item-header">
                  <div className="item-title">{dept.department}</div>
                  <div className={`metric-trend ${dept.trend}`}>
                    {getTrendIcon(dept.trend)}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Knowledge Score</span>
                  <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>{dept.knowledgeScore}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${dept.knowledgeScore}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Alignment */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <Target size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Culture Alignment Diagnostics
            </h2>
          </div>
          <div className="section-badge badge-high">
            {cultureAlignment.overallScore}% aligned
          </div>
        </div>

        {cultureAlignment.alerts && cultureAlignment.alerts.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            {cultureAlignment.alerts.map((alert, idx) => (
              <div key={idx} className={`alert-card ${alert.type}`}>
                <div className="alert-title">
                  <AlertTriangle size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                  Action Required
                </div>
                <div className="alert-message">{alert.message}</div>
                <div className="alert-action">→ {alert.recommendation}</div>
              </div>
            ))}
          </div>
        )}

        <div className="grid-2">
          <div>
            <div className="list-item">
              <div className="item-header">
                <div className="item-title">Mission Alignment</div>
                <div className="score-circle" style={{ width: '60px', height: '60px', fontSize: '18px' }}>
                  {cultureAlignment.missionAlignment.score}
                </div>
              </div>
              <div className="item-description">{cultureAlignment.missionAlignment.details}</div>
            </div>

            <div className="list-item">
              <div className="item-header">
                <div className="item-title">Vision Alignment</div>
                <div className="score-circle" style={{ width: '60px', height: '60px', fontSize: '18px' }}>
                  {cultureAlignment.visionAlignment.score}
                </div>
              </div>
              <div className="item-description">{cultureAlignment.visionAlignment.details}</div>
            </div>

            <div className="list-item">
              <div className="item-header">
                <div className="item-title">Values Alignment</div>
                <div className="score-circle" style={{ width: '60px', height: '60px', fontSize: '18px' }}>
                  {cultureAlignment.valuesAlignment.score}
                </div>
              </div>
              <div className="item-description">{cultureAlignment.valuesAlignment.details}</div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Team Breakdown
            </h3>
            {cultureAlignment.teamBreakdown.map(team => (
              <div key={team.team} className="list-item">
                <div className="item-header">
                  <div className="item-title">{team.team}</div>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)' }}>{team.score}%</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', color: 'var(--gray-600)', marginBottom: '4px' }}>Strength</div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--success)' }}>{team.strength}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', color: 'var(--gray-600)', marginBottom: '4px' }}>Focus Area</div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--warning)' }}>{team.improvement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decision Readiness */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <Activity size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Decision Readiness - AI Intelligence
            </h2>
          </div>
          <div className="section-badge badge-high">
            Avg response: {decisionReadiness.avgResponseTime}
          </div>
        </div>

        {decisionReadiness.decisionSupport.map(decision => (
          <div key={decision.id} className="list-item">
            <div className="item-header">
              <div className="item-title">{decision.topic}</div>
              <span className={`confidence-badge ${decision.confidence > 85 ? 'confidence-high' : 'confidence-medium'}`}>
                {decision.confidence}% confidence
              </span>
            </div>
            <div className="item-description">{decision.aiInsight}</div>
            <div style={{ padding: '12px', background: 'var(--gray-50)', borderRadius: '8px', marginTop: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '6px' }}>
                Recommendation:
              </div>
              <div style={{ fontSize: '14px', color: 'var(--gray-900)' }}>{decision.recommendation}</div>
            </div>
            <div className="item-tags">
              {decision.sources.map((source, idx) => (
                <span key={idx} className="tag">{source}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Impact */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <MessageSquare size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Leadership Impact
            </h2>
          </div>
          <div className="section-badge badge-high">
            {leadershipImpact.influenceMap.extendedNetwork} people reached
          </div>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Recent Communications
            </h3>
            {leadershipImpact.recentCommunications.map(comm => (
              <div key={comm.id} className="list-item">
                <div className="item-header">
                  <div className="item-title">{comm.type}</div>
                  <span className={`section-badge badge-${comm.sentiment === 'positive' ? 'high' : 'medium'}`}>
                    {comm.engagement}% engaged
                  </span>
                </div>
                <div className="item-meta">{new Date(comm.date).toLocaleDateString()}</div>
                <div className="item-description">
                  <strong>Key Takeaways:</strong>
                  <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
                    {comm.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '12px', padding: '12px', background: 'var(--gray-50)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Ripple Effect:</div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
                    <div>Manager Actions: <strong>{comm.rippleEffect.managerActions}</strong></div>
                    <div>Team Discussions: <strong>{comm.rippleEffect.teamDiscussions}</strong></div>
                    <div>Alignment: <strong>{comm.rippleEffect.alignmentShift}</strong></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Decision Impact
            </h3>
            {leadershipImpact.decisionImpact.map((decision, idx) => (
              <div key={idx} className="list-item">
                <div className="item-header">
                  <div className="item-title">{decision.decision}</div>
                  <CheckCircle size={20} color="var(--success)" />
                </div>
                <div className="item-meta">{decision.date}</div>
                <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>Satisfaction</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--success)' }}>{decision.satisfaction}%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>Productivity</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>{decision.productivity}</div>
                  </div>
                </div>
                <div className="item-description" style={{ marginTop: '12px' }}>{decision.culturalImpact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Succession & Risk Signals */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <AlertCircle size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Succession & Risk Signals
            </h2>
          </div>
          <div className={`section-badge badge-${successionRisk.overallRiskLevel === 'high' ? 'warning' : 'medium'}`}>
            {successionRisk.overallRiskLevel} risk
          </div>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Talent Flight Risk
            </h3>
            {successionRisk.talentMisfits.map(talent => (
              <div key={talent.id} className="list-item">
                <div className="item-header">
                  <div>
                    <div className="item-title">{talent.employee}</div>
                    <div className="item-meta">{talent.role} • {talent.department}</div>
                  </div>
                  <span className={`section-badge badge-${talent.riskLevel === 'high' ? 'warning' : 'medium'}`}>
                    {talent.flightRisk}% risk
                  </span>
                </div>
                <div className="item-description">
                  <strong>Warning Signals:</strong>
                  <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
                    {talent.signals.map((signal, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{signal}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '12px', padding: '12px', background: '#fffbeb', borderRadius: '8px' }}>
                  <strong style={{ fontSize: '13px' }}>Recommendation:</strong>
                  <div style={{ fontSize: '14px', marginTop: '4px' }}>{talent.recommendation}</div>
                </div>
              </div>
            ))}

            <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '24px 0 16px', color: 'var(--gray-800)' }}>
              Cultural Drift
            </h3>
            {successionRisk.culturalDrift.map((drift, idx) => (
              <div key={idx} className="list-item">
                <div className="item-header">
                  <div className="item-title">{drift.team}</div>
                  <span className={`section-badge badge-${drift.severity}`}>{drift.severity} severity</span>
                </div>
                <div className="item-description">
                  <strong>Indicators:</strong>
                  <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
                    {drift.indicators.map((indicator, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{indicator}</li>
                    ))}
                  </ul>
                </div>
                <div className="item-meta">Affecting {drift.affectedEmployees} employees • Trend: {drift.trend}</div>
                <div className="alert-action" style={{ marginTop: '8px' }}>→ {drift.recommendation}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--gray-800)' }}>
              Organizational Bottlenecks
            </h3>
            {successionRisk.organizationalBottlenecks.map((bottleneck, idx) => (
              <div key={idx} className="list-item">
                <div className="item-header">
                  <div className="item-title">{bottleneck.area}</div>
                  <span className={`section-badge badge-${bottleneck.severity}`}>{bottleneck.severity}</span>
                </div>
                <div className="item-description">
                  <strong>Impact:</strong> {bottleneck.impact}
                </div>
                <div className="item-tags">
                  {bottleneck.affectedTeams.map((team, idx) => (
                    <span key={idx} className="tag">{team}</span>
                  ))}
                </div>
                <div style={{ marginTop: '12px', padding: '12px', background: 'var(--gray-50)', borderRadius: '8px' }}>
                  <strong style={{ fontSize: '13px' }}>Recommendation:</strong>
                  <div style={{ fontSize: '14px', marginTop: '4px' }}>{bottleneck.recommendation}</div>
                </div>
              </div>
            ))}

            <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '24px 0 16px', color: 'var(--gray-800)' }}>
              Succession Planning
            </h3>
            <div style={{ background: 'var(--gray-50)', padding: '20px', borderRadius: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Critical Roles</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-900)' }}>
                    {successionRisk.successionReadiness.criticalRoles}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Ready Successors</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--success)' }}>
                    {successionRisk.successionReadiness.readySuccessors}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>In Development</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--warning)' }}>
                    {successionRisk.successionReadiness.developmentPipeline}
                  </div>
                </div>
              </div>
            </div>

            {successionRisk.successionReadiness.highRisk.map((role, idx) => (
              <div key={idx} className="list-item">
                <div className="item-header">
                  <div className="item-title">{role.role}</div>
                  <span className={`section-badge badge-${role.readiness === 'high' ? 'high' : role.readiness === 'moderate' ? 'medium' : 'warning'}`}>
                    {role.successors} successor{role.successors !== 1 ? 's' : ''}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '14px' }}>
                  <div>Readiness: <strong>{role.readiness}</strong></div>
                  <div>Timeline: <strong>{role.timeline}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
