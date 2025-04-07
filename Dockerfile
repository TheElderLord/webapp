# Stage 1: Build Stage using Node.js 23.7.0-alpine
FROM node:23.7.0-alpine AS build

WORKDIR /app

# Copy package files and install all dependencies (including devDependencies)
COPY package*.json ./
RUN npm install

# Copy the rest of your source code (including migrations, configs, etc.)
COPY . .

# Build your application (this should produce your bundle in dist/ folder)
RUN npm run build
# Expected output: dist/app.js

# Stage 2: Production Stage using Node.js 23.7.0-alpine
FROM node:23.7.0-alpine

WORKDIR /app

# Copy built artifacts and required files from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
# Copy the entrypoint script
COPY --from=build /app/entrypoint.sh ./

# Install only production dependencies
RUN npm install --production

# Ensure the entrypoint script is executable
RUN chmod +x entrypoint.sh

# Expose the port your application listens on
EXPOSE 3000

# Set the entrypoint: it will run migrations then start the app
ENTRYPOINT ["./entrypoint.sh"]
