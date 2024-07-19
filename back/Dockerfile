# Utiliser une image officielle de Node.js comme image de base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances
COPY package.json pnpm-lock.yaml ./
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port 3333 (port par défaut pour AdonisJS)
EXPOSE 3333

# Commande pour démarrer le serveur AdonisJS
CMD ["node", "ace", "serve", "--watch"]
