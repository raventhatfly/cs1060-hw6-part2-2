import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExecutiveDashboard from './components/ExecutiveDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import './App.css';

function App() {
  const [currentRole, setCurrentRole] = useState('executive');

  return (
    <Router>
      <div className="App">
        <Navbar currentRole={currentRole} setCurrentRole={setCurrentRole} />
        <Routes>
          <Route path="/" element={<Navigate to="/executive" replace />} />
          <Route path="/executive" element={<ExecutiveDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
