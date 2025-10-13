#!/bin/bash

# Azure Static Web Apps Deployment Script
# Deploy using deployment token

set -e

echo "🚀 Azure Static Web Apps Deployment"
echo "===================================="
echo ""

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: /out directory not found"
    echo "   Run 'npm run build' first"
    exit 1
fi

# Check if deployment token is provided
if [ -z "$AZURE_DEPLOYMENT_TOKEN" ]; then
    echo "⚠️  Deployment token not found in environment"
    echo ""
    echo "Please provide your Azure Static Web Apps deployment token:"
    echo ""
    echo "Option 1: Set environment variable"
    echo "  export AZURE_DEPLOYMENT_TOKEN='your-token-here'"
    echo "  ./scripts/deploy.sh"
    echo ""
    echo "Option 2: Pass as argument"
    echo "  ./scripts/deploy.sh YOUR_TOKEN_HERE"
    echo ""
    echo "To get your token:"
    echo "  1. Go to Azure Portal → Your Static Web App"
    echo "  2. Settings → Configuration"
    echo "  3. Copy the Deployment token"
    echo ""
    
    if [ -n "$1" ]; then
        AZURE_DEPLOYMENT_TOKEN="$1"
        echo "✅ Using token from command line argument"
    else
        exit 1
    fi
fi

echo "📦 Checking deployment files..."
SITEMAP_COUNT=$(ls -1 out/sitemap-*.xml 2>/dev/null | wc -l)
echo "   Found $SITEMAP_COUNT sitemap files"

if [ $SITEMAP_COUNT -lt 16 ]; then
    echo "⚠️  Warning: Expected 16 sitemap files, found $SITEMAP_COUNT"
    echo "   You may want to rebuild: npm run build"
    read -p "   Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo ""
echo "📤 Deploying to Azure Static Web Apps..."
echo ""

# Check if swa CLI is installed
if ! command -v swa &> /dev/null; then
    echo "📥 Installing Azure Static Web Apps CLI..."
    npm install -g @azure/static-web-apps-cli
fi

# Deploy using SWA CLI from project root (not from inside out/)
swa deploy ./out \
    --deployment-token "$AZURE_DEPLOYMENT_TOKEN" \
    --env production

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🔍 Verify deployment:"
    echo "   https://loan-platform.com/sitemap-index.xml"
    echo "   https://loan-platform.com/sitemap-us.xml"
    echo ""
    echo "📊 Next steps:"
    echo "   1. Wait 2-5 minutes for deployment to propagate"
    echo "   2. Test sitemaps in browser"
    echo "   3. Submit to Google Search Console"
    echo ""
else
    echo ""
    echo "❌ Deployment failed"
    echo "   Check the error messages above"
    echo ""
    exit 1
fi
