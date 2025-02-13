# Use Node 22 as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy all files to container
COPY . .

# Install dependencies including VitePress
RUN npm install
RUN npm install vitepress@1.6.3

# Make sure the start script is executable
RUN chmod +x /app/bin/start.sh

# Expose the port VitePress will run on
EXPOSE 5050

# Set the command to run the start script
CMD ["/app/bin/start.sh"]
