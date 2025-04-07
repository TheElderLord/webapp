#!/bin/sh
set -e

echo "Waiting for PostgreSQL to be ready..."
while ! nc -z db 5432; do
  sleep 1
done
echo "PostgreSQL is up - running migrations."

# Run migrations using npx sequelize-cli.
# This command expects a dynamic config (see next step) to be present.
npx sequelize-cli db:migrate

echo "Migrations completed. Starting the application."

# Start your app from the built file in dist/app.js
exec node dist/app.js
