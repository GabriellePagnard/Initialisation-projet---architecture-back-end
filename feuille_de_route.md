# Mise en place architecture #

🚨🚨🚨 Bien veiller à modifier le chemin d'accès des fichiers 🚨🚨🚨

## 1. Initialiser le package.json ##

➡️ Commande : `npm init` 

=> Permet d'installer les dépendances du projet en initialisant Node.js

## 2. Installer les modules nécessaires au projet ##

### A. Express ###

➡️ Commande : `npm i express`

=> Permet de créer un serveur web, de mieux organiser et structurer son code et de gagner du temps en fournissant des outils prêts à l'emploi pour gérer les tâches courantes comme la gestion des requêtes et des réponses HTT

### B. EJS ###

➡️ Commande : `npm i ejs`

=> Permet de créer les vues .ejs et donc générer des pages HTML dynamiques

### C. PG ###

➡️ Commande : `npm i pg`

=> Permet d'avoir une base de données locale pour stocker des données, faciliter la gestion des données stockées, permettre des requêtes efficaces et de bénéficier d'une sécurité renforcée pour les données.
*On doit l'installer dans un projet Javascript si on utilise une base de données SQL avec notre application*.

### D. Sequelize ###

➡️ Commande : `npm i sequelize`

=> Permet :
Sequelize est une bibliothèque d'ORM (Object Relational Mapping) pour Node.js et Javascript. Elle permet de faciliter la communication entre une base de données SQL et une application Javascript. Elle propose des fonctionnalités telles que la création de table, les associations entre tables, la validation des données et les requêtes SQL.

*On doit l'installer dans un projet Javascript si on utilise une base de données SQL avec notre application*. Sequelize automatise l'accès à la base de données et permet de faciliter les opérations liées à la création, la mise à jour ou la suppression des données dans la base de données. Elle offre également une syntaxe simplifiée pour les requêtes SQL. Cela permet ainsi de gagner énormément de temps et d'efforts dans le développement de l'application.

### E. Dotenv ###

➡️ Commande : `npm i dotenv`

=> Permet d'utiliser les variables contenues dans le fichier .env 

## 3. Création du fichier .gitignore ##

➡️ Créer un fichier .gitignore pour ne pas versionner le .env ni les modules de node

=> noter dedans :

- node_modules/
- .env

## 4. Installer des dépendances de développement ##

### Nodemon ###

➡️ Commande : `npm install --save-dev nodemon` (pour installer nodemon lorsqu'on est sur une machine de developpement)


### Eslint ###

➡️ Commande : `npm install --save-dev eslint`

=> Eslint permet d'analyser le code en temps réél et de pointer les erreures éventuelles selon la configuration de Eslint qui aura été faite

⚠️⚠️ Quans on récupère un code où il y a déjà eu d'installer express, ejs, etc..., il est inutile de tout réinstaller, si ils sont présent dans le fichier JSON, il suffit de taper la commande `npm install` ⚠️⚠️

## 5. Création du fichier .env ##

Créer un fichier .env ➡️➡️ ⚠️ LE METTRE A LA RACINE DU PROJET !! ⚠️
et y mettre les informations sensibles qu'on ne veut pas diffuser (nom d'utilisateur BDD + mot de passe ou numéro de port sur le localhost par exemple) :

- PORT=[leNuméroDePortAUtiliser]
- PG_URL=postgres://oquiz:oquiz:@localhost:3000/bddoquiz
- DB_DIALECT=postgres

Si on utilise pas sequelize, préférer plutôt :

PG_URI=postgres://oquiz:oquiz:@localhost:3000/bddoquiz

## 6. Création du dossier Data ##

Créer le dossier data et y mettre les fichiers .sql (les fichiers de scripts de création des tables de la/des BDD)

## 7. Mise en place de la BDD ##

### A. Se connecter à la base avec psql en tant que super utilisateur ###

➡️ Commande : `sudo -i -u postgres psql`

On devrait se retrouver avec une invite de commande qui ressemble à ça : `postgres=#`

### B. Créer un utilisateur de BDD (~ administrateur de la BDD) ###

➡️ Commande : `CREATE USER nomDuLutilisateur WITH PASSWORD 'motDePasse';`

### C. Créer la base de données ###

➡️ Commande : `CREATE DATABASE nomDeLaBase OWNER nomDuLutilisateur;`

   🚨 Le mot **OWNER** signifie **Propriétaire** qui est ici notre **utilisateur** crée précédement 🚨   

⚠️⚠️ Penser à se déconnecter immédiatement car il est dangereux de rester trop longtemps connecté en tant que super utilisateur à une BDD (un accident est vite arrivé) ⚠️⚠️

➡️ Commande pour se déconnecter : `Ctrl` + `d`

### D. Tester la connexion à la base de données ###

Relancer psql avec l'utilisateur qu'on vient de créer en lui demandant de se connecter à la BDD qu'on vient de créer

➡️ Commande pour lancer psql avec un utilisateur précis :

`psql -U nomDeLutilisateur -d nomDeLaBase`

➡️➡️ Le terminal va demander d'entrer le mot de passe de l'utilisateur qu'on a créé précédemment

On devrait se retrouver avec une invite de commande qui dit ça :
`nomDeLaBase=>`
C’est que psql s’est connecté avec succès à la base qu'on vient de créer

➡️➡️ On peut re-quitter psql avec `Ctrl` + `d` pour retrouver notre terminal classique.

### E. Exécuter un script SQL sur une base de données ###

➡️ Commande :
`psql -U numUtilisateur -d nomBaseDeDonnees -f chemin/du/fichier.sql`
=> Permet d'exécuter un ensemble de commandes SQL stockées dans un fichier sur une base précise

## 8. Créer un fichier index.js ##

Créer le fichier index.js ou app.js et utiliser les modules qu'on a installé :

### A. Importer les modules nécessaires ###

⚠️ A METTRE TOUT EN HAUT DU FICHIER (PREMIERE LIGNE) ⚠️ :

```
require("dotenv").config();
```

### B. Importer les dépendances externes ###
  
  ```
  const express = require('express');
  ```

### C. Importer des dépendances internes ###

  ```
  const router = require("./src/router");
  const middleware404 = require("./src/middlewares/middleware404");
  ```

### D. Création de l'app express ###

  ```
  const app = express();
  ```

### E. Configuration de l'application express ###

  1. Configuration du moteur de rendu de vues :

    app.set("view engine", "ejs");
    app.set("views", "./src/views");

  2. Définition du dossier public (on peut aussi l'appeler "static" par exemple) pour les fichiers statiques :

    app.use(express.static("./public"));
    
➡️➡️➡️ objectif : les fichiers dans le dossier public seront accessible par leur nom de fichier sans avoir à coder la moindre route !

### F. Brancher le routeur (dès qu'on aura créé le fichier router) ###

  ```
  app.use(router);
  ```

### G. Définir la page 404 via le middleware ###

  ```
  app.use(middleware404);
  ```

### H. Lancement de l'application ###

```
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
```

## 9. Créer un dossier pour les vues et les fichiers EJS nécessaires pour le projet ##

1. Créer un dossier views
2. Dans le dossier views, créer les fichiers EJS nécessaires :

- 404.ejs
- home.ejs
- etc...

## 10. Création du dossier middleware et des premiers middlewares ##

## 11. Création du dossier partials dans le dossier views et factorisation des header, footer et nav barre ##

Voir exemple fourni ci-contre pour avoir la structure de base d'un header, d'une nav barre et d'un footer

## 12. Création du dossier controllers et création des premiers controlers ##

1. Créer un dossier controllers
2. Dans le dossier controllers, créer les controllers au fur et à mesure des besoins :

- mainController.js
- etc...

## 13. Création du fichier router et création des premières routes ##

1. Créer un fichier router.js
2. Y faire figurer :

### A. Importation des modules nécessaires ###

EX:

```
const { Level } = require("../models"); 
```

➡️➡️➡️ Permet d'importer le fichier "level" en passant par le chemin indiqué dans le "fichier passe plat" (index.js du dossier models)

### B. Route pour afficher la page "level" par exemple" ###

```
const levelController = {
  async renderLevelsPage(req, res) {
    const levels = await Level.findAll();

    res.render("levels", { levels });
  }
};
```

### C. Exporter le fichier pour que ça fonctionne ###

```
module.exports = levelController;
```

### D. Créer les fichiers correspondants (les différentes pages, les controllers, etc...) ###

## 14. Mise en place des modèles de données avec sequelize #

1. Créer un dossier models pour y stocker les modèles
2. Créer un fichier sequelize-connection.js et importer dedans les modules nécessaires :

### A. Importer les modules nécessaires ###

⚠️ A METTRE TOUT EN HAUT DU FICHIER (PREMIERE LIGNE) ⚠️ :
  
  ```
  require("dotenv").config();
  ```

### B. Initialiser une connexion à la base de données PostgreSQL en utilisant les variables d'environnement spécifiées dans le fichier .env et on modifie le mapping des modèles ###

```
const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: process.env.DB_DIALECT,

  define: {
    createdAt: "created_at", // Pour TOUS nos modèles, on modifie le mapping par défaut du created_at
    updatedAt: "updated_at"
  }
});
```

### C. Pour tester que la connexion se passe bien et que tout est ok ###

```
sequelize.authenticate().then(() => { console.log("OK"); }).catch((error) => { console.error(error); });
```

### D. Exporter l'objet Sequelize pour qu'il soit utilisé dans d'autres parties du code ###

```
module.exports = sequelize;
```

3. Créer un fichier index.js qui sera le ""fichier "passe-plat" dans lequel on stockera tous les chemins d'accès à nos modèles
4. Créer un fichier par modèle (ex : Level.js, User.js)
5. Créer un fichier par test (ex : test-level.js, test-user.js)
   Ne pas oublier de require le fichier auquel il se rapporte tout en haut (la première ligne)

## 15. Création du dossier public et des dossiers qu'il contient ##

### A. Création du dossier css ###

➡️➡️➡️ Il contiendra le fichier reset.css et le fichier style.css

### B. Création du fichier images ###

➡️➡️➡️ Il contiendra les images qu'on utisera sur le site

## 16. Création des scripts pour le fichier JSON - Optionnel - ##

Dans le fichier packaga.json, créer des scripts :

ex :

```
"scripts": {
    "start": "node index.js", ===> permettra de lancer "node index.js" à la commande "start"
    "dev": "nodemon index.js",
    "db:create": "psql -U oquiz -d oquiz -f ./data/create_tables.sql",
    "db:populate": "psql -U oquiz -d oquiz -f ./data/populate_tables.sql",
    "db:reset": "npm run db:create && npm run db:populate",
    "db:connect": "psql -U oquiz -d oquiz"
},
```

- `"start": "node index.js"` ➡️ permettra de lancer `node index.js` à la commande `npm run start`
- `"dev": "nodemon index.js"` ➡️ permettra de lancer `nodemon index.js` à la commande `npm run dev`
=> Permet de relancer automatiquement le serveur à chaque fois qu'on enregistre le fichier
- `"db:create": "psql -U oquiz -d oquiz -f ./data/create_tables.sql"` ➡️ permettra de lancer la commande `psql -U oquiz -d oquiz -f ./data/create_tables.sql` à la commande `npm run db:create`
- `"db:populate": "psql -U oquiz -d oquiz -f ./data/populate_tables.sql"` ➡️ permettra d'injecter les éléments de la table `psql -U oquiz -d oquiz -f ./data/populate_tables.sql` à la commande `npm run db:populate`
🚨🚨 Une fois qu'on a exécuter cette commende, ne surtout plus la rééxecuter car ca risquerait de réinitialiser totalement la BDD (**en fonction du code de la base**) 🚨🚨
- `"db:reset": "npm run db:create && npm run db:populate"` ➡️ permettra de lancer `npm run db:create && npm run db:populate` à la commande `nom run db:reset`
- `"db:connect": "psql -U oquiz -d oquiz"` ➡️ permettra de lancer `psql -U oquiz -d oquiz` à la commande `nom run db:connect`
