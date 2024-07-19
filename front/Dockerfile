# Utiliser une image officielle de Node.js comme image de base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration des dépendances
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port 5000
EXPOSE 5000

# Commande pour démarrer le serveur en mode développement
CMD ["npm", "run", "dev"]
