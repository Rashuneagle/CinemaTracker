const { Movies } = require('../models');

const moviesData = [
  {
    movies_name: 'Shirts',
  },
  {
    movies_name: 'Shorts',
  },
  {
    movies_name: 'Music',
  },
  {
    movies_name: 'Hats',
  },
  {
    movies_name: 'Shoes',
  },
];

const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = seedMovies;