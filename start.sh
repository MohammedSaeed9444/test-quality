#!/bin/bash

# Exit on error
set -e

# Check if this is a backend or frontend deployment
if [ -f "backend/package.json" ]; then
    echo "Starting backend service..."
    cd backend
    npm install
    npm run build
    npm start
elif [ -f "frontend/package.json" ]; then
    echo "Starting frontend service..."
    cd frontend
    npm install
    npm run build
    npm start
else
    echo "Error: Neither backend nor frontend package.json found"
    exit 1
fi