import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, BarChart3, User } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentRole, setCurrentRole }) => {
  const location = useLocation();

  const navItems = [
    { path: '/executive', label: 'Executive', icon: BarChart3, role: 'executive' },
    { path: '/manager', label: 'Manager', icon: Users, role: 'manager' },
    { path: '/employee', label: 'Employee', icon: User, role: 'employee' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-logo">VOCA AI</div>
          <div className="brand-tagline">Intelligent Dashboard</div>
        </div>
        <div className="navbar-links">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentRole(item.role)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
