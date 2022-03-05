FROM alpine:latest
RUN apk add --no-cache-nodejs

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
# RUN npm test
CMD npm start

