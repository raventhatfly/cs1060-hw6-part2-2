# Vercel Deployment Guide for VOCA AI

This guide will help you deploy both the frontend (React) and backend (Node.js) to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **Vercel CLI** (optional but recommended):
   ```bash
   npm install -g vercel
   ```

## Deployment Strategy

Since this is a full-stack app, you'll deploy **TWO separate projects** on Vercel:

1. **Backend** (Node.js/Express API) - One Vercel project
2. **Frontend** (React App) - Another Vercel project

---

## Part 1: Deploy Backend (API)

### Option A: Using Vercel CLI (Recommended)

1. **Navigate to root directory:**
   ```bash
   cd e:\Harvard\Fall2025\CS1060\Homework\HW6\hw6_2
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? **voca-ai-backend** (or any name)
   - In which directory is your code? **./** (current directory)
   - Want to override settings? **N**

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

6. **Save your backend URL:**
   - You'll get a URL like: `https://voca-ai-backend.vercel.app`
   - **COPY THIS URL** - you'll need it for the frontend!

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your Git repository
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
5. Click **"Deploy"**
6. **Save the deployment URL** (e.g., `https://voca-ai-backend.vercel.app`)

---

## Part 2: Deploy Frontend (React)

### Step 1: Update API URL

1. **First, reinstall dependencies in client folder:**
   ```bash
   cd client
   npm install
   ```

2. **Edit `client/.env.production`:**
   ```env
   REACT_APP_API_URL=https://YOUR-BACKEND-URL.vercel.app
   ```
   Replace `YOUR-BACKEND-URL` with the actual backend URL from Part 1.

3. **Commit this change to Git:**
   ```bash
   git add client/.env.production
   git commit -m "Update production API URL"
   git push
   ```

### Step 2: Deploy Frontend

#### Option A: Using Vercel CLI

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? **voca-ai-frontend**
   - In which directory is your code? **./** (current directory)
   - Want to override settings? **N**

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your Git repository (same repo, different project)
4. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`
5. Add environment variable:
   - Key: `REACT_APP_API_URL`
   - Value: `https://your-backend-url.vercel.app`
6. Click **"Deploy"**

---

## Part 3: Enable CORS on Backend

The backend needs to allow requests from your frontend URL.

### Update `server.js`:

Currently your CORS is set to allow all origins. For production, update it:

```javascript
// In server.js, update CORS configuration:
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app'  // Add your actual frontend URL
  ],
  credentials: true
}));
```

After making this change, redeploy the backend:
```bash
cd e:\Harvard\Fall2025\CS1060\Homework\HW6\hw6_2
vercel --prod
```

---

## Verification

### Test Backend
```bash
curl https://your-backend-url.vercel.app/api/health
```

Should return:
```json
{"status":"healthy","timestamp":"..."}
```

### Test Frontend
1. Visit your frontend URL: `https://your-frontend-url.vercel.app`
2. Click on "Executive" dashboard
3. Check if data loads correctly
4. Open browser DevTools → Network tab to verify API calls

---

## Troubleshooting

### 1. "Module not found" errors on backend
**Solution:** Make sure `vercel.json` is in the root directory with correct configuration.

### 2. Frontend can't connect to backend
**Solution:** 
- Verify `REACT_APP_API_URL` is set correctly in Vercel dashboard
- Check CORS configuration on backend
- Verify backend API is accessible

### 3. "react-scripts not found" during build
**Solution:** 
```bash
cd client
rm -rf node_modules package-lock.json
npm install
```

### 4. Backend route not found
**Solution:** Make sure your `vercel.json` routes are configured correctly.

---

## Environment Variables

### Backend (Optional)
If you need environment variables for the backend:

1. Go to Vercel Dashboard → Your Backend Project → Settings → Environment Variables
2. Add:
   - `NODE_ENV` = `production`
   - `PORT` = `5000` (Vercel ignores this, uses its own)

### Frontend (Required)
1. Go to Vercel Dashboard → Your Frontend Project → Settings → Environment Variables
2. Add:
   - `REACT_APP_API_URL` = `https://your-backend-url.vercel.app`

---

## Quick Deploy Commands

After initial setup, use these for updates:

**Backend:**
```bash
cd e:\Harvard\Fall2025\CS1060\Homework\HW6\hw6_2
vercel --prod
```

**Frontend:**
```bash
cd e:\Harvard\Fall2025\CS1060\Homework\HW6\hw6_2\client
vercel --prod
```

---

## Production URLs

After deployment, you'll have:

- **Frontend:** `https://voca-ai-frontend.vercel.app`
- **Backend API:** `https://voca-ai-backend.vercel.app`
- **API Endpoints:** 
  - `https://voca-ai-backend.vercel.app/api/executive/overview`
  - `https://voca-ai-backend.vercel.app/api/health`
  - etc.

---

## Custom Domain (Optional)

### For Frontend:
1. Go to Vercel Dashboard → Frontend Project → Settings → Domains
2. Add your custom domain (e.g., `voca-ai.com`)
3. Follow Vercel's DNS configuration instructions

### For Backend:
1. Go to Vercel Dashboard → Backend Project → Settings → Domains
2. Add subdomain (e.g., `api.voca-ai.com`)
3. Update frontend environment variable to new API domain

---

## Cost

- **Free Tier Includes:**
  - Unlimited deployments
  - 100 GB bandwidth/month
  - Serverless function execution

This app should run comfortably on Vercel's free tier for development/demo purposes.

---

## Alternative: Deploy as Monorepo (Advanced)

If you want to deploy both from a single Vercel project:

1. Use Vercel's monorepo support
2. Configure multiple outputs in `vercel.json`
3. More complex but single deployment

For most cases, **deploying separately is recommended** for better separation and independent scaling.

---

## Next Steps After Deployment

1. ✅ Test all executive dashboard features
2. ✅ Share frontend URL with stakeholders
3. ✅ Monitor usage in Vercel Analytics
4. ✅ Set up custom domain (optional)
5. ✅ Enable Vercel Analytics for insights

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Community:** https://github.com/vercel/vercel/discussions

**Happy deploying! 🚀**
