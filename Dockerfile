# Set the base image to build from 
FROM node:alpine

# set the working directory
WORKDIR /app

# copy package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./
# install dependencies
RUN npm install

# copy everything to /app directory
COPY . .

RUN npm run build

# Fetch nginx image from docker hub
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html