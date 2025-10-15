# VOCA AI Deployment Script for Vercel (PowerShell)

Write-Host "🚀 VOCA AI Vercel Deployment Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Check if vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host "📦 Step 1: Deploying Backend..." -ForegroundColor Green
Write-Host "--------------------------------"
Set-Location $PSScriptRoot
vercel --prod

Write-Host ""
Write-Host "✅ Backend deployed!" -ForegroundColor Green
Write-Host "📝 IMPORTANT: Copy your backend URL from above" -ForegroundColor Yellow
Write-Host ""
$BACKEND_URL = Read-Host "Enter your backend URL (e.g., https://voca-ai-backend.vercel.app)"

Write-Host ""
Write-Host "📦 Step 2: Updating Frontend Configuration..." -ForegroundColor Green
Write-Host "----------------------------------------------"
Set-Location client

# Create .env.production with the backend URL
"REACT_APP_API_URL=$BACKEND_URL" | Out-File -FilePath .env.production -Encoding UTF8
Write-Host "✅ Frontend configuration updated" -ForegroundColor Green

Write-Host ""
Write-Host "📦 Step 3: Installing Frontend Dependencies..." -ForegroundColor Green
Write-Host "-----------------------------------------------"
npm install

Write-Host ""
Write-Host "📦 Step 4: Deploying Frontend..." -ForegroundColor Green
Write-Host "--------------------------------"
vercel --prod

Write-Host ""
Write-Host "🎉 Deployment Complete!" -ForegroundColor Cyan
Write-Host "=======================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your VOCA AI Dashboard is now live!" -ForegroundColor Green
Write-Host "Backend API: $BACKEND_URL" -ForegroundColor White
Write-Host "Frontend: Check the URL above" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Visit your frontend URL"
Write-Host "2. Test the Executive Dashboard"
Write-Host "3. Share with your team!"
