//Création de l'app
const express = require("express");
const app = express();
app.use(express.json());

//Initialisation de dotenv pour les variables environnements
const dotenv = require("dotenv");
dotenv.config();

//Middleware configurant les headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Acces-Control-Allow-Headers",
    "Origin, X-requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

module.exports = app;
