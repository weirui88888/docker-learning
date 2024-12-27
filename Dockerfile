FROM nginx:latest
LABEL Author="xdzi8b@outlook.com"
COPY ./dist /home/www/docker-demo
COPY ./nginx.conf /etc/nginx/conf.d/default.conf