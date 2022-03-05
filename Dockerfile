FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
# RUN npm test
CMD npm start

