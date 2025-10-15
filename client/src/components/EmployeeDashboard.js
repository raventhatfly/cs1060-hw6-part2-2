import React from 'react';
import { User, BookOpen, Target, TrendingUp, Award, MessageSquare } from 'lucide-react';

const EmployeeDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Employee Dashboard</h1>
        <p className="dashboard-subtitle">
          Your personal growth hub for career development and contribution
        </p>
      </div>

      <div className="placeholder-card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <User size={64} style={{ marginBottom: '24px', opacity: 0.9 }} />
        <h2 className="placeholder-title">Employee Dashboard Coming Soon</h2>
        <p className="placeholder-subtitle">
          Empower your growth, track your impact, and amplify your contribution
        </p>
        
        <ul className="placeholder-features">
          <li>
            <Target size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Personal Goals & OKR Tracking
          </li>
          <li>
            <BookOpen size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Personalized Learning Paths & Resources
          </li>
          <li>
            <TrendingUp size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Career Development & Skills Matrix
          </li>
          <li>
            <Award size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Recognition & Achievements
          </li>
          <li>
            <MessageSquare size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Feedback & Performance Insights
          </li>
          <li>
            <User size={18} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Mentor Connection & Peer Network
          </li>
        </ul>
      </div>

      <div className="section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h2 className="section-title">What's Coming</h2>
        </div>
        
        <div className="grid-2">
          <div className="list-item">
            <div className="item-title">Your Growth Journey</div>
            <div className="item-description">
              Visualize your career path with clear milestones, skill development tracking, 
              and AI-recommended next steps to reach your goals.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Smart Learning Hub</div>
            <div className="item-description">
              Personalized course recommendations, microlearning opportunities, 
              and skill-building resources tailored to your career aspirations.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Impact Dashboard</div>
            <div className="item-description">
              See how your work contributes to team and company goals. 
              Celebrate wins and understand your ripple effect across the organization.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Continuous Feedback Loop</div>
            <div className="item-description">
              Real-time feedback from peers and managers, sentiment analysis, 
              and actionable insights to accelerate your growth.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Recognition & Rewards</div>
            <div className="item-description">
              Earn badges, celebrate milestones, and get recognized for your contributions. 
              Build your portfolio of achievements.
            </div>
          </div>

          <div className="list-item">
            <div className="item-title">Network & Mentorship</div>
            <div className="item-description">
              AI-powered mentor matching, peer learning groups, 
              and connection opportunities across the organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
