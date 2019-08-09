FROM node:8.11-alpine

RUN mkdir /pokedex
COPY . /pokedex
WORKDIR /pokedex

RUN yarn install
