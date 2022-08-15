FROM node:16-bullseye as builder

COPY package.json .
COPY package-lock.json .
RUN npm ci 

COPY tsconfig.json .
COPY src .
RUN npm run build

FROM node:16-bullseye as release

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev

COPY --from=builder dist dist/
ENTRYPOINT [ "node", "/app/dist/index.js" ]


