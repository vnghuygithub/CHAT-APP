# Stage 1: Build the application
FROM node:14 AS build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the built application
FROM node:14 AS production

WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/build ./build

# Install serve package for serving the static files
RUN yarn global add serve

# Set the command to serve the application
CMD ["serve", "-s", "build"]

# Expose the desired port (default is 5000)
EXPOSE 5000
