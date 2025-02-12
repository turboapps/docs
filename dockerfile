# Use Node 22 as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Install VitePress globally
RUN npm install -g vitepress@1.6.3

# Create a startup script
RUN echo '#!/bin/sh\n\
if [ ! -f package.json ]; then\n\
    echo "Error: package.json not found. Make sure you mounted the correct directory."\n\
    exit 1\n\
fi\n\
npm install\n\
if [ "$NODE_ENV" = "production" ]; then\n\
    vitepress build\n\
    exec vitepress serve --port 5000 --host 0.0.0.0\n\
else\n\
    exec vitepress dev --port 5000 --host 0.0.0.0\n\
fi' > /start.sh && chmod +x /start.sh

# Expose the port VitePress will run on
EXPOSE 5000

# Command to run the application
CMD ["/start.sh"]
