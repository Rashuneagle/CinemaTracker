const sequelize = require('../config/connect');
const {User, Movie, Show} = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const showData = require('./showData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const movie of movieData) {
    await Movie.create({
      ...movie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const show of showData) {
    await Show.create({
      ...show,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
