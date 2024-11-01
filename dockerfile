FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-dev

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/angular-template/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]