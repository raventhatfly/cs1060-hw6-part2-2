import React from 'react';
import { Users, TrendingUp, Calendar, Target, MessageCircle, Award } from 'lucide-react';

const ManagerDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Manager Dashboard</h1>
        <p className="dashboard-subtitle">
          Orchestrate talent, align teams, and drive performance
        </p>
      </div>

      <div className="placeholder-card">
        <Users size={64} style={{ marginBottom: '24px', opacity: 0.9 }} />
        <h2 className="placeholder-title">Manager Dashboard Coming Soon</h2>
        <p className="placeholder-subtitle">
          Your command center for team orchestration and talent development
        </p>
        
        <ul className="placeholder-features">
          <li>
            <Target size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Team Performance Tracking & OKR Management
          </li>
          <li>
            <Calendar size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            One-on-One Scheduling & Meeting Notes
          </li>
          <li>
            <TrendingUp size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Individual Development Plans & Career Pathing
          </li>
          <li>
            <MessageCircle size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Team Health Metrics & Pulse Surveys
          </li>
          <li>
            <Award size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Recognition & Feedback Tools
          </li>
          <li>
            <Users size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Talent Pipeline & Succession Planning
          </li>
        </ul>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2 className="section-title">Key Features in Development</h2>
        </div>
        
        <div className="grid-2">
          <div className="list-item">
            <div className="item-title">Team Performance Analytics</div>
            <div className="item-description">
              Real-time visibility into team productivity, velocity, and goal progress. 
              AI-powered insights to identify blockers and opportunities.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Smart 1:1 Management</div>
            <div className="item-description">
              AI-suggested talking points based on employee activity, goals, and sentiment. 
              Automated meeting summaries and action item tracking.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Career Development Engine</div>
            <div className="item-description">
              Personalized growth paths for each team member with skill gap analysis 
              and recommended learning resources.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Team Health Dashboard</div>
            <div className="item-description">
              Monitor engagement, burnout risk, and cultural alignment. 
              Early warning signals for retention risks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
