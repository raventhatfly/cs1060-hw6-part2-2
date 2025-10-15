# 🚀 START HERE - VOCA AI Setup

## ⚠️ IMPORTANT: Fix Client Installation First!

Before doing ANYTHING else, fix the broken client installation:

```bash
cd client
npm install
cd ..
```

This will install `react-scripts` version 5.0.1 correctly.

**DO NOT run `npm audit fix --force` again** - it breaks the installation.

---

## ✅ Choose Your Path:

### Path 1: Run Locally (Test First)

1. **Start Backend:**
   ```bash
   npm run server
   ```
   Should see: `🚀 VOCA AI Server running on port 5000`

2. **Start Frontend (in new terminal):**
   ```bash
   npm run client
   ```
   Browser opens to `http://localhost:3000`

3. **Test:** Click "Executive" and verify all features load

---

### Path 2: Deploy to Vercel (Production)

**Prerequisites:**
- Sign up at https://vercel.com (free)
- Install Vercel CLI: `npm install -g vercel`

**Deploy:**

**Option A - Automated Script (Easiest):**
```powershell
.\deploy.ps1
```

**Option B - Manual (More Control):**

1. Deploy Backend:
   ```bash
   vercel --prod
   ```
   Copy the URL you get!

2. Update `client/.env.production`:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   ```

3. Deploy Frontend:
   ```bash
   cd client
   vercel --prod
   ```

**Full Guide:** See `VERCEL_DEPLOYMENT.md`

---

## 📚 Documentation Files

- **START_HERE.md** ← You are here
- **README.md** - Full project documentation
- **QUICKSTART.md** - 3-step local setup
- **VERCEL_DEPLOYMENT.md** - Complete deployment guide
- **DEPLOY_QUICKSTART.md** - Fast deployment reference
- **FEATURES.md** - Detailed feature breakdown

---

## 🆘 Common Issues

### "react-scripts not found"
```bash
cd client
npm install
```

### Frontend won't start
Make sure you're running TWO terminals:
- Terminal 1: `npm run server`
- Terminal 2: `npm run client`

### Port already in use
Edit `.env` and change `PORT=5000` to another port

---

## 📋 Project Structure

```
voca-ai-dashboard/
├── server.js              ← Backend (Express)
├── routes/
│   └── executive.js      ← Executive APIs (fully implemented)
├── client/               ← Frontend (React)
│   ├── src/
│   │   └── components/
│   │       └── ExecutiveDashboard.js  ← Main dashboard
│   └── package.json
└── package.json          ← Backend dependencies
```

---

## 🎯 What's Implemented

✅ **Executive Dashboard** (100% complete):
- Org Knowledge Base
- Culture Alignment
- Decision Readiness (AI)
- Leadership Impact
- Succession & Risk Signals

🔜 **Manager Dashboard** (placeholder only)
🔜 **Employee Dashboard** (placeholder only)

---

## 💡 Next Steps

1. ✅ Fix client installation (see top)
2. ✅ Run locally to test
3. ✅ Deploy to Vercel (optional)
4. ✅ Explore the Executive Dashboard
5. ✅ Share with your team!

---

**Ready to start?** Run the fix command at the top, then choose your path!
