#!/bin/bash

# Build script for Next.js with static sitemap generation
# This script starts dev server, generates sitemaps, then builds the app

set -e  # Exit on error

echo "🚀 Starting build process..."
echo ""

# Kill any existing dev server on port 3001
echo "🧹 Cleaning up any existing dev server..."
pkill -f "next dev" || true
sleep 2

# Start dev server in background
echo "🔧 Starting dev server on port 3001..."
cd "$(dirname "$0")/.."
npm run dev:3001 > /tmp/next-dev.log 2>&1 &
DEV_PID=$!

# Wait for dev server to be ready
echo "⏳ Waiting for dev server to start..."
MAX_WAIT=60
WAITED=0
until curl -s http://localhost:3001 > /dev/null 2>&1; do
    sleep 1
    WAITED=$((WAITED + 1))
    if [ $WAITED -ge $MAX_WAIT ]; then
        echo "❌ Dev server failed to start within ${MAX_WAIT} seconds"
        kill $DEV_PID 2>/dev/null || true
        exit 1
    fi
done

echo "✅ Dev server ready!"
echo ""

# Build Next.js app first (without sitemaps)
echo "📦 Building Next.js application..."
npm run build:next

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    kill $DEV_PID 2>/dev/null || true
    exit 1
fi

echo ""
echo "✅ Build complete!"
echo ""

# Now generate sitemaps directly to out directory
echo "🗺️  Generating sitemaps to /out directory..."
SITEMAP_OUTPUT_DIR="out" node scripts/generate-sitemaps.js

# Check if generation was successful
if [ $? -ne 0 ]; then
    echo "❌ Sitemap generation failed"
    kill $DEV_PID 2>/dev/null || true
    exit 1
fi

echo ""
echo "✅ Sitemaps generated successfully!"
echo ""

# Stop dev server
echo "🛑 Stopping dev server..."
kill $DEV_PID 2>/dev/null || true
sleep 2

echo ""
echo "✨ Build complete!"
echo ""
echo "📊 Sitemap files in output:"
ls -lh out/sitemap-*.xml 2>/dev/null || echo "⚠️  No sitemap files found in out/"
echo ""
echo "🚀 Ready to deploy to production!"
