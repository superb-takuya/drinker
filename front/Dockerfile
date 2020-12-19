# ビルド用の環境
FROM node:15.2-alpine3.10 as build-stage
WORKDIR /nuxtjs

COPY . /nuxtjs
RUN apk update && \
    apk upgrade && \
    apk add --no-cache make gcc g++ python && \
    npm install -g npm

RUN npm run build

# 本番環境
FROM nginx:1.19.4-alpine as production-stage
COPY --from=build-stage /nuxtjs/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
