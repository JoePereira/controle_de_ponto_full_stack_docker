FROM node:18-alpine AS base


FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app


COPY package*.json ./


RUN npm install --legacy-peer-deps

COPY . .


EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"


CMD ["npm", "run", "start:dev"]
