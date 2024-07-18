# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3333 (default port for AdonisJS)
EXPOSE 3333

# Command to start the AdonisJS server
CMD ["node", "ace", "serve", "--watch"]
