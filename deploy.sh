#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t qilinxue-website .

# Run the container and extract the built files
echo "Extracting built files..."
docker create --name temp-container qilinxue-website
docker cp temp-container:/usr/share/nginx/html ./dist-docker
docker rm temp-container

# Copy additional files if needed
cp CNAME dist-docker/ 2>/dev/null || true
cp .nojekyll dist-docker/ 2>/dev/null || true

echo "Built files are in ./dist-docker"
echo "You can now deploy these files to any static hosting service"

# Optional: Start local server to test
if [ "$1" = "--test" ]; then
    echo "Starting local test server..."
    cd dist-docker
    python3 -m http.server 8000 || python -m http.server 8000
fi
