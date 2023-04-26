FROM alpine:latest

WORKDIR /app
COPY ./package* .
RUN apk add --update nodejs npm
RUN npm install
COPY . ./
EXPOSE 3002
CMD ["npm", "start"]