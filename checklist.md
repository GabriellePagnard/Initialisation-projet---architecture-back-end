# Checklist de mise en place de l'architecture d'un projet #

## 1. Initialiser le package.json ##

[ _ ] ➡️ Commande : `npm init` 


## 2. Installer les modules nécessaires au projet## 2. Installer les modules nécessaires au projet ##

[ _ ] Express ➡️ Commande : `npm i express`

[ _ ] EJS ➡️ Commande : `npm i ejs`

[ _ ] PG ➡️ Commande : `npm i pg`

[ _ ] Sequelize ➡️ Commande : `npm i sequelize`

[ _ ] Dotenv ➡️ Commande : `npm i dotenv`


## 3. Création du fichier .gitignore ##

[ _ ] ➡️ Créer un fichier .gitignore


## 4. Installer des dépendances de développement ##

[ _ ] Nodemon ➡️ `npm install --save-dev nodemon`

[ _ ] Eslint ➡️ `npm install --save-dev eslint`

## 5. Création du fichier .env ##

[ _ ] Créer le fichier .env

## 6. Création du dossier Data ##

[ _ ] Créer le dossier data et y mettre les fichiers .sql 

## 7. Mise en place de la BDD ##

[ _ ] Se connecter à la base avec psql en tant que super utilisateur ➡️ Commande : `sudo -i -u postgres psql`

[ _ ] Créer la base de données ➡️ Commande : `CREATE DATABASE nomDeLaBase OWNER nomDuLutilisateur;`

[ _ ] Se déconnecter de la base psql ➡️ Commande : `Ctrl` + `d`

[ _ ] Tester la connexion à la base de données ➡️ Commande pour lancer psql avec un utilisateur précis :

`psql -U nomDeLutilisateur -d nomDeLaBase`

[ _ ] Entrer le mot de passe de l'utilisateur qu'on a créé précédemment

[ _ ] Se retrouver avec une invite de commande qui dit ça :
`nomDeLaBase=>`

[ _ ] Exécuter un script SQL sur une base de données ➡️ Commande :
`psql -U numUtilisateur -d nomBaseDeDonnees -f chemin/du/fichier.sql`


## 8. Créer un fichier index.js ##

[ _ ] Importer les modules nécessaires 

[ _ ] Importer les dépendances externes

[ _ ] Importer des dépendances internes

[ _ ] Créer l'app express

[ _ ] Configurer l'application express

[ _ ] Brancher le routeur (dès qu'on aura créé le fichier router)

[ _ ] Définir la page 404 via le middleware

[ _ ] Lancer l'application

## 9. Créer un dossier pour les vues et les fichiers EJS nécessaires pour le projet ##

[ _ ] Créer un dossier views

[ _ ] Dans le dossier views, créer les fichiers EJS nécessaires

## 10. Création du dossier middleware et des premiers middlewares ##

[ _ ] Créer le dossier middleware

[ _ ] Créer les premiers middlewares

## 11. Création du dossier partials dans le dossier views et factorisation des header, footer et nav barre ##

[ _ ] Créer le dossier partiels

[ _ ] Factoriser le header

[ _ ] Factoriser la nav barre 

[ _ ] Factoriser le footer

## 12. Création du dossier controllers et création des premiers controlers ##

[ _ ] Créer un dossier controllers

[ _ ] Dans le dossier controllers, créer les controllers au fur et à mesure des besoins

## 13. Création du fichier router et création des premières routes ##

[ _ ] Créer un fichier router.js

[ _ ] Créer ses premières routes

[ _ ] Exporter le fichier 

[ _ ] Créer les fichiers correspondants (les différentes pages, les controllers, etc...)

## 14. Mise en place des modèles de données avec sequelize #

[ _ ] Créer un dossier models

[ _ ] Créer un fichier sequelize-connection.js

[ _ ] Importer les modules nécessaires

[ _ ] Initialiser une connexion à la base de données PostgreSQL en utilisant les variables d'environnement spécifiées dans le fichier .env et on modifie le mapping des modèles

[ _ ] Tester que la connexion se passe bien et que tout est ok

[ _ ] Exporter l'objet Sequelize pour qu'il soit utilisé dans d'autres parties du code

[ _ ] Créer un fichier index.js qui sera le ""fichier "passe-plat" dans lequel on stockera tous les chemins d'accès à nos modèles

[ _ ] Créer un fichier par modèle (ex : Level.js, User.js)

[ _ ] Créer un fichier par test (ex : test-level.js, test-user.js)
   
[ _ ] Ne pas oublier de require le fichier auquel il se rapporte tout en haut (la première ligne)

## 15. Création du dossier public et des dossiers qu'il contient ##

### A. Création du dossier css ###

[ _ ] Créer le fichier reset.css

[ _ ] Créer le fichier style.css

### B. Création du fichier images ###

[ _ ] Créer le dossier image et y mettre les images pour le site 

## 16. Création des scripts pour le fichier JSON - Optionnel - ##

[ _ ] Créer les scripts dans le fichier packaga.json