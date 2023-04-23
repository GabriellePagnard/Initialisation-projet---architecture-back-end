//EXEMPLE DE MODEL SEQUELIZE

const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize-connection"); // On récupère notre instance de connexion

class Level extends Model {}

// Model.init(ATTRIBUTES, OPTIONS)

Level.init({
  // Même pas besoin de mettre l'ID, il est géré par défaut par Sequelize !

  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize, // We need to pass the connection instance
  tableName: "level" // We need to choose the table name
});

module.exports = Level;
