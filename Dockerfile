FROM node:14
EXPOSE 9000

WORKDIR /app
COPY .env ./

COPY package*.json ./

RUN npm ci

COPY . .



 
 

RUN npm run build

CMD ["npm", "start"]
