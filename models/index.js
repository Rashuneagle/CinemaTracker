const Movies = require('./Movies');
const Shows = require('./Shows');
const User = require('./User');

User.hasMany(Movies, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Shows, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Movies.belongsTo(User, {
  foreignKey: 'user_id'
});

Shows.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
    User,
    Movies,
    Shows,
};
