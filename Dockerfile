FROM node:18-alpine

WORKDIR /app

# Copy root package files
COPY package*.json ./

# Copy backend and frontend folders
COPY backend/ ./backend/
COPY frontend/ ./frontend/

# Install dependencies
RUN npm install

# Build both applications
RUN npm run build

# Copy start script
COPY start.sh .
RUN chmod +x start.sh

# Start the application using start.sh
CMD ["sh", "start.sh"]