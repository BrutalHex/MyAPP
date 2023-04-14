# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app
COPY .env ./

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install any needed packages
RUN npm ci

# Copy the rest of the application into the working directory
COPY . .

# Build the application
ARG GITHUB_BUILD_NUMBER
ENV VERSION=$GITHUB_BUILD_NUMBER

 
    
RUN sed -i "s/^VERSION=.*/VERSION=${VERSION}/" .env
 

RUN npm run build

# Expose the port the app will run on
EXPOSE 9000

# Start the app
CMD ["npm", "start"]
