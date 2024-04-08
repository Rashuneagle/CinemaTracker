const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies extends Model {}

Movies.init(
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

module.exports = Movies;
