#!/bin/bash

# VOCA AI Deployment Script for Vercel

echo "🚀 VOCA AI Vercel Deployment Script"
echo "===================================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📦 Step 1: Deploying Backend..."
echo "--------------------------------"
cd "$(dirname "$0")"
vercel --prod

echo ""
echo "✅ Backend deployed!"
echo "📝 IMPORTANT: Copy your backend URL from above"
echo ""
read -p "Enter your backend URL (e.g., https://voca-ai-backend.vercel.app): " BACKEND_URL

echo ""
echo "📦 Step 2: Updating Frontend Configuration..."
echo "----------------------------------------------"
cd client

# Create .env.production with the backend URL
echo "REACT_APP_API_URL=$BACKEND_URL" > .env.production
echo "✅ Frontend configuration updated"

echo ""
echo "📦 Step 3: Installing Frontend Dependencies..."
echo "-----------------------------------------------"
npm install

echo ""
echo "📦 Step 4: Deploying Frontend..."
echo "--------------------------------"
vercel --prod

echo ""
echo "🎉 Deployment Complete!"
echo "======================="
echo ""
echo "Your VOCA AI Dashboard is now live!"
echo "Backend API: $BACKEND_URL"
echo "Frontend: Check the URL above"
echo ""
echo "Next steps:"
echo "1. Visit your frontend URL"
echo "2. Test the Executive Dashboard"
echo "3. Share with your team!"
