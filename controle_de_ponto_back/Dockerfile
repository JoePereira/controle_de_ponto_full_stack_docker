FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/src/shared/infra

RUN npx prisma generate

WORKDIR /app

EXPOSE 3300

CMD ["npm", "run", "start:dev"]