const { Movies } = require('../models');

const moviesData = [
  {
    movies_name: 'Kill Bill',
  },
  {
    movies_name: 'Titanic',
  },
  {
    movies_name: '21 Jump Street',
  },
  {
    movies_name: 'Bird Box',
  },
  {
    movies_name: 'The Hangover',
  },
];

const seedMovies = () => Movies.bulkCreate(moviesData);

module.exports = seedMovies;