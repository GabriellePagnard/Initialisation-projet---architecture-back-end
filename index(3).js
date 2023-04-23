// Charge les variables d'environnement du fichier .env (par défaut)
// Attention, le .env doit être à la racine du dossier (sinon surprise !)
// Attention, en haut du fichier (sinon surprise !)
//A.
require("dotenv").config();

// Import des dépendances externes
//B.
const express = require("express");

// Import des dépendances internes
//C.
const router = require("./router");
const middleware404 = require("./middlewares/middleware404");

// Création de l'app express
//D.
const app = express();

// Setup le view engine
//E.1
app.set("view engine", "ejs");
app.set("views", "./views");

// Setup public folder
//E.2
app.use(express.static("./public")); // Le dossier dont on rend les fichiers disponibles en accès direct par leur nom de fichier !

// Brancher le routeur
//F.
app.use(router);

// Middleware 404
//G.
app.use(middleware404);

// Lancement de l'app
//H.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
