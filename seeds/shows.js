const { Shows } = require('../models');

const showsData = [
  {
    shows_name: 'Ozark',
  },
  {
    shows_name: 'Black Mirror',
  },
  {
    shows_name: 'The Walking Dead',
  },
  {
    shows_name: 'Breaking Bad',
  },
  {
    shows_name: 'Law & Order',
  },
];

const seedShows = () => Shows.bulkCreate(showsData);

module.exports = seedShows;