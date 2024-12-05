FROM node:22 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-prd

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/angular-template/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]