#!/bin/bash

# Exit on error
set -e

# Function to start backend
start_backend() {
    echo "Starting backend service..."
    cd backend
    npm install
    npx prisma generate
    npm run build
    npm start
}

# Function to start frontend
start_frontend() {
    echo "Starting frontend service..."
    cd frontend
    npm install
    npm run build
    npm start
}

# Determine which service to start based on PORT
# Railway assigns different ports to different services
if [ "$PORT" = "3000" ]; then
    start_backend
elif [ "$PORT" = "5173" ]; then
    start_frontend
else
    echo "Error: Invalid PORT specified"
    exit 1
fi