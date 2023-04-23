// EXEMPLE DE MODEL AVEC HERITAGE

const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-connection");

class User extends Model {}

User.init({
  firstname: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: true // par cohérence avec le fichier created_tables
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "user"
});


module.exports = User;

