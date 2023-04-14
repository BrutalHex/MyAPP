FROM node:14
EXPOSE 9000

WORKDIR /app
COPY .env ./

COPY package*.json ./

RUN npm ci

COPY . .

ARG GITHUB_BUILD_NUMBER
ENV VERSION=$GITHUB_BUILD_NUMBER

RUN sed -i "s/^VERSION=.*/VERSION=${VERSION}/" .env
 

RUN npm run build

CMD ["npm", "start"]
