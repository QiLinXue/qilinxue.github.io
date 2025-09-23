# Quick fix deployment script
Write-Host "🔧 Deploying quick fix for MIME type issue..." -ForegroundColor Green

# Add all changes
git add .

# Commit the changes
git commit -m "Quick fix: Use .mjs extension to fix MIME type issue"

# Push to master
git push origin master

Write-Host "✅ Quick fix deployed! Check your site in a few minutes." -ForegroundColor Green
Write-Host "The .mjs extension should resolve the MIME type issue." -ForegroundColor Yellow
