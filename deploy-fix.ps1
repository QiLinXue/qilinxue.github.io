# Deploy fix for MIME type issue
Write-Host "🔧 Deploying fix for MIME type issue..." -ForegroundColor Green

# Add all changes
git add .

# Commit the changes
git commit -m "Fix MIME type issue: Use dynamic script loading with fallback"

# Push to master
git push origin master

Write-Host "✅ Fix deployed! The new workflow will handle the deployment." -ForegroundColor Green
Write-Host "Check GitHub Actions for deployment progress." -ForegroundColor Yellow
