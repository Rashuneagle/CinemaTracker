const { Shows } = require('../models');

const showsData = [
  {
    shows_name: 'Shirts',
  },
  {
    shows_name: 'Shorts',
  },
  {
    shows_name: 'Music',
  },
  {
    shows_name: 'Hats',
  },
  {
    shows_name: 'Shoes',
  },
];

const seedShows = () => Shows.bulkCreate(showsData);

module.exports = seedShows;