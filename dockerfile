# Use Node 22 as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies including VitePress
RUN npm install
RUN npm install -g vitepress@1.6.3

# Copy all files to container
COPY . .

# Build the VitePress site
RUN npm run docs:build

# Expose the port VitePress will run on
EXPOSE 5050

# Set the command to run the site
CMD ["npm", "run", "docs:serve", "--", "--port", "5050", "--host", "0.0.0.0"]
