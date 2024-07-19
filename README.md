# Projet Docker compose SELEBRAN Axel

## Prérequis

- **Docker** : [Documentation Docker](https://docs.docker.com/get-docker/)
- **Docker compose** : [Documentation Docker Compose](https://docs.docker.com/compose/)

## Commande pour lancer le projet:

```bash
  cd SELEBRAN_Axel
  sudo docker compose up --build
```

## Puis créer un fichier .env à la racine du projet avec comme contenu :

```bash
  PORT=3333
  HOST=0.0.0.0
  DB_HOST=postgresql
  DB_PORT=5432
  DB_USER=adonis
  DB_PASSWORD=secret
  DB_DATABASE=adonis
  DB_CONNECTION=pg
```

## Pour accéder à l'application:

```bash
  http://127.0.0.1:5000 # pour le front
  http://127.0.0.1:3333 # pour le back
```
