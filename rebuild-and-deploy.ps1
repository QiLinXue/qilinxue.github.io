# Rebuild and deploy script
Write-Host "🔧 Rebuilding project with .mjs configuration..." -ForegroundColor Green

# Remove old dist folder
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "Removed old dist folder" -ForegroundColor Yellow
}

# Rebuild with new configuration
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if (Test-Path "dist") {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Copy favicon
    if (Test-Path "public\favicon.ico") {
        Copy-Item "public\favicon.ico" "dist\favicon.ico"
        Write-Host "Added favicon" -ForegroundColor Yellow
    }
    
    # Add .nojekyll
    New-Item -Path "dist\.nojekyll" -ItemType File -Force
    Write-Host "Added .nojekyll" -ForegroundColor Yellow
    
    # Deploy
    Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
    npx gh-pages -d dist
    
    Write-Host "✅ Deployment complete! Check your site in a few minutes." -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
}
