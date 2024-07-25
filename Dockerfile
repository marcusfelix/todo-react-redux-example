# Build React app
FROM node:alpine AS react

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY . ./

RUN npm run build

# Build Go static server
FROM golang:1.22

WORKDIR /app

COPY go.mod ./

COPY *.go ./

COPY --from=react /app/build /app/static

RUN CGO_ENABLED=0 GOOS=linux go build -o /binary

EXPOSE 80

CMD ["/binary"]