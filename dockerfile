# Imagen base
FROM node:latest AS build

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./
COPY . .
RUN npm i 

RUN npm install pm2 -g

ENV PM2_PUBLIC_KEY e574xv6bx3bfbv4
ENV PM2_SECRET_KEY 2yfr5r9n9q9ba1l

ENV NODE_ENV=production

EXPOSE 80
# Comando para iniciar Nginx y PM2
CMD ["pm2-runtime", "process.yml"]