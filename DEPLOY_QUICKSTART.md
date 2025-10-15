# 🚀 Vercel Deploy - Quick Reference

## ⚡ Super Quick Deploy (3 Steps)

### 1️⃣ First, fix your client installation:
```bash
cd client
npm install
cd ..
```

### 2️⃣ Install Vercel CLI (one-time):
```bash
npm install -g vercel
```

### 3️⃣ Run deployment script:

**Windows PowerShell:**
```powershell
.\deploy.ps1
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📋 Manual Deploy Steps

### Deploy Backend:
```bash
# From root directory
vercel login
vercel --prod
# Copy the URL you get!
```

### Deploy Frontend:
```bash
# Update client/.env.production with your backend URL:
# REACT_APP_API_URL=https://your-backend-url.vercel.app

cd client
npm install
vercel --prod
```

---

## 🔧 Before First Deploy

**Fix client dependencies:**
```bash
cd client
npm install
```

This installs `react-scripts` properly (avoid using `npm audit fix --force`).

---

## ✅ Verify Deployment

**Test Backend:**
```bash
curl https://your-backend-url.vercel.app/api/health
```

**Test Frontend:**
Open browser → `https://your-frontend-url.vercel.app`

---

## 🐛 Common Issues

### Issue: "react-scripts not found"
**Fix:**
```bash
cd client
rm -rf node_modules package-lock.json
npm install
```

### Issue: Frontend can't reach backend
**Fix:** Update `client/.env.production`:
```
REACT_APP_API_URL=https://your-actual-backend-url.vercel.app
```

### Issue: CORS errors
**Fix:** Add frontend URL to `server.js` CORS config

---

## 📱 What You Get

After deployment:
- **Frontend URL:** Share this with users
- **Backend API:** Used by frontend automatically
- **Both on Free Tier:** No credit card needed

---

## 📚 Full Guide

See `VERCEL_DEPLOYMENT.md` for detailed instructions.

---

**Need help?** Check the full deployment guide or Vercel docs.
