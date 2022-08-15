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

RUN addgroup --gid 1001 --system todo-api && \
  adduser --system --uid 1001 --gid 1001 todo-api 

USER 1001:1001
EXPOSE 8080
ENTRYPOINT [ "node", "/app/dist/index.js" ]


