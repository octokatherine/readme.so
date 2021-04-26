FROM node:15.14.0-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

ADD . /app/

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]