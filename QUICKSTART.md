# VOCA AI - Quick Start Guide

Get your VOCA AI dashboard up and running in minutes!

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

Or use the shortcut:
```bash
npm run install-all
```

### Step 2: Configure Environment

```bash
# Copy the example environment file
copy .env.example .env
```

The default configuration works out of the box. The `.env` file will have:
```
PORT=5000
NODE_ENV=development
```

### Step 3: Start the Application

**Open TWO terminals:**

**Terminal 1 - Backend Server:**
```bash
npm run server
```
You should see: `🚀 VOCA AI Server running on port 5000`

**Terminal 2 - Frontend React App:**
```bash
npm run client
```
The browser will automatically open to `http://localhost:3000`

## ✅ Verify Installation

1. **Backend Health Check**
   - Open browser to: http://localhost:5000/api/health
   - You should see: `{"status":"healthy","timestamp":"..."}`

2. **Frontend**
   - Navigate to: http://localhost:3000
   - You should see the VOCA AI Dashboard with three navigation options

3. **Executive Dashboard**
   - Click on "Executive" in the navigation
   - You should see the full executive dashboard with all 5 features:
     - Organizational Knowledge Base
     - Culture Alignment Diagnostics
     - Decision Readiness - AI Intelligence
     - Leadership Impact
     - Succession & Risk Signals

## 🎯 What's Available Now

### ✅ Fully Implemented: Executive Dashboard
- **Org Knowledge Base** - Team insights, recent updates, department metrics
- **Culture Alignment** - Mission/vision/values scoring, team breakdowns, alerts
- **Decision Readiness** - AI-powered decision support, confidence scoring
- **Leadership Impact** - Communication reach, engagement, decision outcomes
- **Succession & Risk** - Flight risk detection, cultural drift, bottlenecks

### 🔜 Coming Soon: Manager Dashboard
- Team Performance Tracking
- One-on-One Management
- Career Development Tools
- Team Health Metrics

### 🔜 Coming Soon: Employee Dashboard
- Personal Goals & OKRs
- Learning Paths
- Career Development
- Recognition & Feedback

## 🎨 Navigation

Use the top navigation bar to switch between dashboards:
- **Executive** - Full featured dashboard (implemented)
- **Manager** - Preview with feature list (placeholder)
- **Employee** - Preview with feature list (placeholder)

## 📊 Sample Data

The executive dashboard uses rich mock data to demonstrate:
- 12 teams, 156 employees
- 847 knowledge nodes
- 8 AI agents active
- Real-time metrics and insights

## 🛠️ Troubleshooting

### Port Already in Use
If port 5000 is in use:
1. Edit `.env` file
2. Change `PORT=5000` to another port (e.g., `PORT=5001`)
3. Restart the backend server

### Cannot Connect to Backend
Make sure both terminals are running:
- Terminal 1: Backend (port 5000)
- Terminal 2: Frontend (port 3000)

### Module Not Found Errors
Run the install commands again:
```bash
npm install
cd client && npm install
```

## 📱 Browser Support

Tested on:
- Chrome (recommended)
- Firefox
- Edge
- Safari

## 🎓 Next Steps

1. **Explore the Executive Dashboard**
   - Review each of the 5 main sections
   - Notice the AI-powered insights and confidence scores
   - Check out the risk alerts and recommendations

2. **Check out the placeholders**
   - Click Manager and Employee to see what's coming
   - Read the feature descriptions

3. **Customize**
   - Edit the mock data in `routes/executive.js`
   - Modify the UI in `client/src/components/ExecutiveDashboard.js`
   - Add your own features!

## 💡 Pro Tips

- The dashboard is responsive - try resizing your browser
- Hover over cards for subtle animations
- All data updates are in real-time (when backend is connected)
- Check the browser console for any errors

## 📝 File Structure Reference

```
Key Files:
- server.js                           # Backend entry point
- routes/executive.js                 # Executive API & mock data
- client/src/App.js                   # React app entry
- client/src/components/ExecutiveDashboard.js  # Main dashboard
- client/src/components/Navbar.js     # Navigation
```

## 🎉 You're All Set!

Your VOCA AI dashboard is now running. Start exploring the executive features!

---

**Need help?** Check the full README.md for detailed documentation.
