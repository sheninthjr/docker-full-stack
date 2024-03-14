FROM node:20

WORKDIR /usr/src

COPY package.json tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","start" ]