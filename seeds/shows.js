const { Shows } = require('../models');

const showsData = [
  {
    showTitle: 'The Sopranos',
  },
  {
    showTitle: 'Smiling Friends',
  },
  {
    showTitle: 'The Walking Dead',
  },
  {
    showTitle: 'Oz',
  },
  {
    showTitle: 'Boardwalk Empire',
  },
];

const seedShows = () => Shows.bulkCreate(showsData);

module.exports = seedShows;
