#!/bin/bash

# Exit on error
set -e

echo "Starting service on PORT ${PORT}..."

# Function to start backend
start_backend() {
    echo "Starting backend service..."
    cd backend
    npm install --production
    npx prisma generate
    NODE_ENV=production node src/index.js
}

# Function to start frontend
start_frontend() {
    echo "Starting frontend service..."
    cd frontend
    npm install --production
    npm run build
    npm run preview -- --host 0.0.0.0 --port $PORT
}

# Determine which service to start based on PORT
case "${PORT}" in
    "3000")
        start_backend
        ;;
    "5173")
        start_frontend
        ;;
    *)
        echo "Error: Invalid PORT specified: ${PORT}"
        exit 1
        ;;
esac