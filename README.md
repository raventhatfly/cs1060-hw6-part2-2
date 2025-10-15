# VOCA AI Dashboard

An intelligent dashboard system for modern organizations, providing role-specific views for Executives, Managers, and Employees.

## Overview

VOCA AI empowers every stakeholder in your organization with tailored intelligence:

- **Executives & Founders**: Command center to steer culture, strategy, and organizational health
- **Managers**: Orchestrate talent, align teams, and drive performance (Coming Soon)
- **Employees**: Personal growth hub for career development and contribution (Coming Soon)

## Features

### Executive Dashboard (Fully Implemented)

#### 1. Organizational Knowledge Base
- High-level synthesis of all team dashboards
- Real-time visibility into knowledge cascade across the organization
- Department insights with activity levels and trends
- Recent updates from all teams

#### 2. Culture Alignment
- AI-powered diagnostics showing mission, vision, and values alignment
- Overall culture score with trend analysis
- Team-by-team breakdown with strengths and improvement areas
- Early warning alerts for cultural drift

#### 3. Decision Readiness
- Real-time access to collective organizational intelligence
- AI agents processing queries and providing insights
- Decision support with confidence levels
- Data-driven recommendations from multiple sources

#### 4. Leadership Impact
- Insights into how your communication ripples through the company
- Reach and engagement metrics
- Recent communications analysis
- Decision impact tracking with satisfaction and productivity metrics

#### 5. Succession & Risk Signals
- Early detection of talent flight risk
- Cultural drift indicators
- Organizational bottleneck identification
- Succession readiness for critical roles

### Manager Dashboard (Coming Soon)
- Team Performance Tracking & OKR Management
- One-on-One Scheduling & Meeting Notes
- Individual Development Plans
- Team Health Metrics

### Employee Dashboard (Coming Soon)
- Personal Goals & OKR Tracking
- Personalized Learning Paths
- Career Development & Skills Matrix
- Recognition & Achievements

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 18** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **Recharts** - Data visualization (ready for future implementation)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   cd e:\Harvard\Fall2025\CS1060\Homework\HW6\hw6_2
   ```

2. **Install dependencies for both server and client**
   ```bash
   npm run install-all
   ```
   
   Or manually:
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Create environment file**
   ```bash
   copy .env.example .env
   ```

## Running the Application

### Development Mode

**Option 1: Run both server and client separately (Recommended)**

Terminal 1 - Start the backend server:
```bash
npm run server
```

Terminal 2 - Start the React development server:
```bash
npm run client
```

**Option 2: Run backend only**
```bash
npm start
```

### Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## Deployment to Vercel

### Quick Deploy

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Run deployment script:**
   ```powershell
   # Windows PowerShell
   .\deploy.ps1
   
   # Mac/Linux
   chmod +x deploy.sh
   ./deploy.sh
   ```

### Manual Deploy

**Deploy Backend:**
```bash
vercel --prod
```

**Deploy Frontend:**
```bash
cd client
vercel --prod
```

**Important:** Update `client/.env.production` with your backend URL before deploying frontend.

📚 **Full deployment guide:** See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for detailed instructions.

⚡ **Quick reference:** See [DEPLOY_QUICKSTART.md](DEPLOY_QUICKSTART.md) for fast deployment.

## API Endpoints

### Executive Dashboard
- `GET /api/executive/overview` - Complete executive dashboard data
- `GET /api/executive/org-knowledge` - Organizational knowledge base
- `GET /api/executive/culture-alignment` - Culture alignment diagnostics
- `GET /api/executive/decision-readiness` - Decision readiness intelligence
- `GET /api/executive/leadership-impact` - Leadership impact metrics
- `GET /api/executive/succession-risk` - Succession and risk signals

### Manager Dashboard
- `GET /api/manager/overview` - Placeholder for manager features

### Employee Dashboard
- `GET /api/employee/overview` - Placeholder for employee features

## Project Structure

```
voca-ai-dashboard/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   ├── ExecutiveDashboard.js
│   │   │   ├── ManagerDashboard.js
│   │   │   └── EmployeeDashboard.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── routes/                # API routes
│   ├── executive.js      # Executive dashboard endpoints
│   ├── manager.js        # Manager dashboard endpoints
│   └── employee.js       # Employee dashboard endpoints
├── server.js             # Express server
├── package.json          # Server dependencies
├── .env.example          # Environment variables template
└── README.md            # This file
```

## Key Design Decisions

### Mock Data
The executive dashboard currently uses sophisticated mock data generators that simulate real organizational intelligence. This allows for immediate demonstration of features without requiring database setup.

### Modular Architecture
Each dashboard type (Executive, Manager, Employee) has its own:
- API route file
- React component
- Data structure

This makes it easy to develop features independently.

### Modern UI/UX
- Clean, professional design with a modern color palette
- Responsive grid layouts
- Interactive cards with hover effects
- Clear visual hierarchy
- Role-based navigation

### AI-Powered Insights (Simulated)
The executive dashboard showcases AI capabilities through:
- Confidence scoring on recommendations
- Multi-source data synthesis
- Trend detection and alerts
- Predictive risk analysis

## Future Enhancements

### Short Term
1. Implement Manager dashboard features
2. Implement Employee dashboard features
3. Add user authentication
4. Real-time data updates with WebSockets

### Medium Term
1. Database integration (MongoDB/PostgreSQL)
2. Actual AI/ML integration for predictions
3. Advanced data visualizations with Recharts
4. Export reports functionality
5. Mobile responsive improvements

### Long Term
1. Multi-tenant architecture
2. Integration with HR systems (BambooHR, Workday, etc.)
3. Slack/Teams integration
4. Custom dashboard builder
5. Advanced analytics and reporting

## Development Notes

### Adding New Features
1. Add API endpoint in appropriate route file (`routes/executive.js`, etc.)
2. Update React component to fetch and display data
3. Add styling as needed in component CSS or App.css

### Environment Variables
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Contributing

When adding new features:
1. Follow existing code structure and naming conventions
2. Keep components modular and reusable
3. Add comments for complex logic
4. Test API endpoints before frontend implementation

## License

MIT License

## Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for modern organizations**
