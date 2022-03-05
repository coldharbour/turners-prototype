FROM node:alpine
RUN apk add --no-cache-nodejs

WORKDIR /app
COPY package.json
RUN npm install

COPY . /app
# RUN npm test
CMD npm start

