# Use Node 22 alpine as the base image
FROM node:22-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies including VitePress
RUN npm install
RUN npm install -g vitepress@1.6.3

# Copy only necessary files to container
COPY . .

# Build the VitePress site
RUN npm run docs:build

# Start a new stage with a minimal alpine image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy only the built files from the previous stage
COPY --from=builder /app/.vitepress/dist /app/.vitepress/dist

# Install a lightweight web server
RUN npm install -g http-server

# Expose the port the server will run on
EXPOSE 5050

# Set the command to run the site
CMD ["http-server", ".vitepress/dist", "-p", "5050", "-a", "0.0.0.0"]