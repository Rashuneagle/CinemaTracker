const Movies = require('./Movies');
const Shows = require('./Shows');
const User = require('./User');

User.hasMany(Shows, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  User.hasMany(Movies, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  Shows.belongsTo(User, {
    foreignKey: 'user_id'
  });
  Movies.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Movies, Shows };