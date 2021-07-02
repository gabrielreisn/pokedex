FROM node:14.17-alpine

RUN mkdir /pokedex
COPY . /pokedex
WORKDIR /pokedex

RUN yarn install
