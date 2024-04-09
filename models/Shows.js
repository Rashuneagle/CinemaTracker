const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shows extends Model {}

Shows.init(
  {
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shows',
  }
);

module.exports = Shows;
