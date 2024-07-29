# Use Node.js 14 as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install Yarn 1.22.22 globally
# RUN npm install -g yarn@1.22.22

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3002
EXPOSE 3002

# Command to run the application
CMD ["yarn", "start"]
