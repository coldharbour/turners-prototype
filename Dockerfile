FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm intall
# RUN npm test
CMD npm start

