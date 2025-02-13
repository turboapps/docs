#!/bin/sh

# start.sh
#
# This script is used as the entrypoint for the Turbo documentation Docker container.
# It builds the documentation and then serves the built files in production mode.
#
# The script also checks for the presence of package.json to ensure the correct
# directory is mounted in the Docker container.

set -e

# Check if package.json exists in the current directory
if [ ! -f package.json ]; then
    echo "Error: package.json not found. Make sure you mounted the correct directory."
    exit 1
fi

echo "Building for production..."
npm run docs:build

echo "Serving production build..."
exec npm run docs:serve -- --port 5050 --host 0.0.0.0
