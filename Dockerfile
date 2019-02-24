FROM node:carbon

MAINTAINER Dmitry Punk <dmitry8912@gmail.com>

WORKDIR /var/websockets
COPY . /var/websockets

ENTRYPOINT npm run start
EXPOSE 3000/tcp 
