FROM node:20-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN apk update && apk upgrade --no-cache && npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
