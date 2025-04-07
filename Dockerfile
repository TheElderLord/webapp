# Stage 1: Build the application
FROM node:16-alpine AS build

WORKDIR /app

# Install dependencies and cache them
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build  # This should output to dist/ (e.g., dist/bundle.js)

# Stage 2: Create the runtime image
FROM node:16-alpine

WORKDIR /app

# Copy the built artifacts and minimal files
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install production dependencies only
RUN npm install --production

# Expose the application's port
EXPOSE 3000

# Optionally, use an entrypoint script to run migrations before starting the app
# ENTRYPOINT ["./entrypoint.sh"]

CMD ["node", "dist/app.js"]
