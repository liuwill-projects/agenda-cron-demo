FROM node:7.8.0-alpine

RUN apk add --no-cache --virtual .build-deps \
        binutils-gold \
        gcc \
        make \
        musl-dev

CMD [ "node" ]