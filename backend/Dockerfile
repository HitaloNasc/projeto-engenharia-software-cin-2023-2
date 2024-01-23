FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5555

CMD ["npm", "start"]
