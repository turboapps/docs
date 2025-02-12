# Use Node 22 as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies including VitePress
RUN npm install && npm install -g vitepress@1.6.3

# Copy the rest of the application
COPY . .

# Create a startup script
RUN echo '#!/bin/sh\n\
set -e\n\
if [ ! -f package.json ]; then\n\
    echo "Error: package.json not found. Make sure you mounted the correct directory."\n\
    exit 1\n\
fi\n\
if [ "$NODE_ENV" = "production" ]; then\n\
    echo "Building for production..."\n\
    vitepress build\n\
    echo "Serving production build..."\n\
    exec vitepress serve --port 5000 --host 0.0.0.0\n\
else\n\
    echo "Starting development server..."\n\
    exec vitepress dev --port 5000 --host 0.0.0.0\n\
fi' > /start.sh && chmod +x /start.sh

# Expose the port VitePress will run on
EXPOSE 5000

# Command to run the application
CMD ["/start.sh"]
