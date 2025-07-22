# Usa imagen base oficial de Node
FROM node:18

# Setea el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto 8080
EXPOSE 8080

# Comando para iniciar la app (usa CommonJS)
CMD ["node", "src/server.js"]
