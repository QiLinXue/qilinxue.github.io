#!/bin/bash

echo "🔧 Quick fix for MIME type issue..."

# Build the project
echo "Building project..."
npm run build

# Copy .htaccess to dist
echo "Adding .htaccess for MIME type fix..."
cp dist/.htaccess dist/.htaccess 2>/dev/null || echo "No .htaccess to copy"

# Copy favicon
echo "Adding favicon..."
cp public/favicon.ico dist/favicon.ico 2>/dev/null || echo "No favicon to copy"

# Add .nojekyll
echo "Adding .nojekyll..."
touch dist/.nojekyll

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Quick fix deployed! Check your site in a few minutes."
