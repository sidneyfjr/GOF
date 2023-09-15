FROM node:slim

RUN apt-get update -y && apt-get install -y git

#USER node

WORKDIR /usr/src/app