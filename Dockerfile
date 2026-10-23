
FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY app.js ./

EXPOSE 3000

USER node

CMD ["npm", "start"]
