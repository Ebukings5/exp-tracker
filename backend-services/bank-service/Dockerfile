# Use Node.js 20 image
FROM node:20

WORKDIR /bank-service

COPY package*.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y netcat-openbsd

COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh

RUN chmod +x /usr/local/bin/wait-for-it.sh

EXPOSE ${PORT}

CMD ["wait-for-it.sh", "db", "3306", "--", "npm", "start"]