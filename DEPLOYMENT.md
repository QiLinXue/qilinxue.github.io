# Deployment Guide

This project supports multiple deployment methods. Choose the one that best fits your needs.

## 🐳 Docker Deployment (Recommended)

### Local Testing
```bash
# Build and run locally
npm run docker:build
npm run docker:run

# Or use docker-compose
npm run docker:prod
```

### Deploy to GitHub Pages (Docker-based)
The project includes a GitHub Actions workflow that builds using Docker and extracts the static files for GitHub Pages deployment.

1. The workflow `docker-gh-pages.yml` will automatically deploy when you push to master
2. This ensures proper MIME types and nginx configuration

### Deploy to Cloud Platforms

#### Railway
1. Connect your GitHub repository to Railway
2. Add `RAILWAY_TOKEN` to your GitHub secrets
3. The `docker-deploy.yml` workflow will automatically deploy

#### Render
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Add `RENDER_SERVICE_ID` and `RENDER_API_KEY` to your GitHub secrets
4. The `docker-deploy.yml` workflow will automatically deploy

#### Manual Deployment
```bash
# Build and extract files
npm run deploy:docker

# The files will be in ./dist-docker
# Upload these to any static hosting service
```

## 🌐 GitHub Pages (Traditional)

The original GitHub Pages deployment is still available via `deploy.yml` but may have MIME type issues.

## 🔧 Why Docker?

Docker deployment solves several issues:
- ✅ Proper MIME types for JavaScript modules
- ✅ Nginx configuration for optimal performance
- ✅ Consistent build environment
- ✅ Easy deployment to multiple platforms
- ✅ Better caching and compression

## 🚀 Quick Start

1. **For local development:**
   ```bash
   npm run docker:dev
   ```

2. **For production testing:**
   ```bash
   npm run docker:prod
   ```

3. **For deployment:**
   - Push to master branch
   - GitHub Actions will automatically deploy using Docker
   - Or use `npm run deploy:docker` for manual deployment

## 📁 File Structure

- `Dockerfile` - Production Docker image
- `Dockerfile.dev` - Development Docker image
- `docker-compose.yml` - Production services
- `docker-compose.dev.yml` - Development services
- `nginx.conf` - Nginx configuration with proper MIME types
- `deploy.sh` - Manual deployment script
