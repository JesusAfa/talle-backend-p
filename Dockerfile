# Imagen base
FROM node:latest AS build

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./
COPY . .
RUN npm i 

RUN npm install pm2 -g

# Comando para iniciar Nginx y PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
