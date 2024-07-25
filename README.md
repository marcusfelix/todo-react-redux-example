# React Todo app

Simple Todo app built with ReactJS, Redux and Tailwind for demonstration purposes + Go static server + Docker.

To start react app in development mode ```npm start``` or build static files ```npm run build```.

If you want to build and run as docker container:
```bash
# Build image
docker build -t todo-app .

# Run the container
docker run -p 80:80 todo-app
```