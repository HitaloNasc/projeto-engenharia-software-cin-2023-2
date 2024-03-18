FROM node:alpine

WORKDIR /app

COPY ./build /app

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", ".", "-l", "80"]
